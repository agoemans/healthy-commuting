import { EmployeeModel, TransportMonthModel } from '../models';
import { UpdatedEmployee } from '../types/route-names';

const getNumOfDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
}

const isWeekDay = (year: number, month: number, day) => {
    const dayOfWeek: number = new Date(year, month, day).getDay();
    return dayOfWeek >=1 && dayOfWeek <= 5;
}

const getWorkDays = (month: number, year: number) => {
    let days = getNumOfDaysInMonth(month, year);
    let workDays: number = 0;
    for(let i: number = 0; i < days; i++) {
        if(isWeekDay(year, month, i + 1)) {
            workDays++;
        }
    }

    return workDays;
}

const getTotalDistanceTraveled = (data: EmployeeModel, workDaysInMonth: number) => {
    const {workingDaysPerWeek, distanceInKmOneWay} = data;
    const totalWorkDaysForEmployee: number = Math.round((workDaysInMonth * workingDaysPerWeek) / 5);
    return (distanceInKmOneWay * 2) * totalWorkDaysForEmployee;
}

const getDistanceCompensation = (data: EmployeeModel) => {
    const { transportMethod, distanceInKmOneWay } = data;
    const distancePerDay: number = distanceInKmOneWay * 2;
    let compensationPerDay: number = 0.50;

    switch(transportMethod.toLowerCase()) {
        case 'car':
            compensationPerDay = 0.10;
            break;
        case 'train':
        case 'bus':
            compensationPerDay = 0.25;
            break;
        default:
        case 'bike':
            if(distancePerDay > 5 && distancePerDay < 10) {
                compensationPerDay = 1.00;
            }
            break;
    }

    return compensationPerDay;
}

const getEmployeeWithCommuteCalculation = (data: EmployeeModel, workDaysInMonth: number) => {
    let updatedEmployee: UpdatedEmployee = {
        firstName: data.firstName,
        transport: data.transportMethod,
        traveledDistance: getTotalDistanceTraveled(data, workDaysInMonth),
        compensationForMonth: getDistanceCompensation(data) * getTotalDistanceTraveled(data, workDaysInMonth)
    };

    return updatedEmployee;
}

export const getDataWithCalcDistance = (data: TransportMonthModel) => {
    const {month, year, employees} = data;
    const workDays: number = getWorkDays(month, year);

    let updatedEmployees: UpdatedEmployee[] = [];

    employees.map((employee: EmployeeModel) => {
        let updatedEmployee: UpdatedEmployee = getEmployeeWithCommuteCalculation(employee, workDays);
        updatedEmployees.push(updatedEmployee);
    })

    return {
        year,
        month,
        employees: updatedEmployees
    };
}