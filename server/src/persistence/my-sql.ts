import { TransportMonthModel } from '../models';
import {Repository} from "./repository";

const mysql = require('mysql');

export class MySqlClient implements Repository {
    connector = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DBUSER,
        password : process.env.DBPASSWORD
    });

    constructor() {
        this.connector.connect((err: any) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query = ( sql: string, args?: any ): Promise<unknown> => {
        return new Promise( ( resolve: any, reject: any ) => {
            this.connector.query( sql, args, ( err: any, rows: any ) => {
                if ( err ) {
                    reject( err );
                }
                resolve( rows );
            } );
        } );
    };

    getCurrentMonth = async () => {
       // todo implement
        const query = null;

        try {
            const monthResult: any = await this.query(query);

            return {
                year: 2022,
                month: 5,
                employees: []
            };

        } catch(err: any) {
            throw new Error('Could not current month transport info: ' + err );
        }
    };

}