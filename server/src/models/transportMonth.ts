import { EmployeeModel } from './employee';

export interface TransportMonthModel {
    year: number;
    month: number;
    employees: EmployeeModel[];
}