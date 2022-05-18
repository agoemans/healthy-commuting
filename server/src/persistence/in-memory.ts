import { TransportMonthModel } from '../models';

import { currentMonthData } from './test-data';
import { Repository } from "./repository";

export class InMemory implements Repository {
    currentMonth: TransportMonthModel = currentMonthData;
    getCurrentMonth = async () => this.currentMonth;
}