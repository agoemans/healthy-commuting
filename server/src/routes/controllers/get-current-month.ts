import { Request, Response } from 'express';

import { repository } from '../../persistence';

export const getCurrentMonth = async (req: Request, res: Response) => {
    try {
        const getCalendarResult = await repository.getCurrentMonth();
        res.status(200);
        res.send(getCalendarResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'NOT_IMPLEMENTED: Data for Current month' });
    }
};