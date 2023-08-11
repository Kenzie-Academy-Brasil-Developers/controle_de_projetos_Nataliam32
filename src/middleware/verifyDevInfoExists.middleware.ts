import { Request, Response, NextFunction } from "express";
import { DeveloperInfosResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";

const verifyDevInfoExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const query: DeveloperInfosResult = await client.query(
        'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
        [req.params.id]
    );

    if(query.rowCount !== 0) {
        throw new AppError('DevInfos already exists.', 409);
    };

    return next();
}

export default verifyDevInfoExists;