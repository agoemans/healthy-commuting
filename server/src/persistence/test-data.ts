import { TransportMonthModel } from '../models'

export const currentMonthData: TransportMonthModel = {
    monthNumber: 5,
    employees: [
        {
            firstName: 'Paul',
            lastName: null,
            transportMethod: 'car',
            distanceInKmOneWay: 60,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Martin',
            lastName: null,
            transportMethod: 'bus',
            distanceInKmOneWay: 8,
            workingDaysPerWeek: 4
        },
        {
            firstName: 'Jeroen',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 9,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Tineke',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 4,
            workingDaysPerWeek: 3
        },
        {
            firstName: 'Arnout',
            lastName: null,
            transportMethod: 'train',
            distanceInKmOneWay: 23,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Mathijs',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 11,
            workingDaysPerWeek: 4.5
        },
        {
            firstName: 'Rens',
            lastName: null,
            transportMethod: 'car',
            distanceInKmOneWay: 12,
            workingDaysPerWeek: 5
        }
    ]
}
