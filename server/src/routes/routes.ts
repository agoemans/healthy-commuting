import { Request, Response } from 'express';

import * as controllers from './controllers';
import { RouteNames } from '../types/route-names';

export interface Route {
    method: 'get' | 'post' | 'delete';
    path: string;
    handler: (req: Request, res: Response) => unknown;
}

export const routes: Route[] = [
    {
        method: 'get',
        path: `/api/${RouteNames.CURRENT_MONTH}`,
        handler: controllers.getCurrentMonth
    },
];