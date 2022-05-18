import { TransportMonthModel } from '../models'

export const currentMonthData: TransportMonthModel = {
    year: 2022,
    month: 5,
    employees: [
        {
            firstName: 'Paul',
            lastName: null,
            transportMethod: 'Car',
            distanceInKmOneWay: 60,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Martin',
            lastName: null,
            transportMethod: 'Bus',
            distanceInKmOneWay: 8,
            workingDaysPerWeek: 4
        },
        {
            firstName: 'Jeroen',
            lastName: null,
            transportMethod: 'Bike',
            distanceInKmOneWay: 9,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Tineke',
            lastName: null,
            transportMethod: 'Bike',
            distanceInKmOneWay: 4,
            workingDaysPerWeek: 3
        },
        {
            firstName: 'Arnout',
            lastName: null,
            transportMethod: 'Train',
            distanceInKmOneWay: 23,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Mathijs',
            lastName: null,
            transportMethod: 'Bike',
            distanceInKmOneWay: 11,
            workingDaysPerWeek: 4.5
        },
        {
            firstName: 'Rens',
            lastName: null,
            transportMethod: 'Car',
            distanceInKmOneWay: 12,
            workingDaysPerWeek: 5
        }
    ]
}
