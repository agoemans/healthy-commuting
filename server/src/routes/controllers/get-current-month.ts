import { Request, Response } from 'express';

import { repository } from '../../persistence';
import { getDataWithCalcDistance } from '../../helper/getDataWithCalcDistance';

export const getCurrentMonth = async (req: Request, res: Response) => {
    try {
        const monthResult = await repository.getCurrentMonth();
        const updatedResult = getDataWithCalcDistance(monthResult);
        res.status(200);
        res.send(updatedResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'NOT_IMPLEMENTED: Data for Current month' });
    }
};