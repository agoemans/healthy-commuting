import { TransportMonthModel } from '../models';

export interface Repository {
    getCurrentMonth: () => Promise<TransportMonthModel>;
}