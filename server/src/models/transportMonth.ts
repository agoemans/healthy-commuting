import { EmployeeModel } from './employee';

export interface TransportMonthModel {
    monthNumber: number;
    employees: EmployeeModel[];
}