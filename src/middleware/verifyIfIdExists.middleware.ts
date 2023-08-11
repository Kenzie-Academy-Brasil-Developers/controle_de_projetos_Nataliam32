import { Request, Response, NextFunction } from "express";
import { DeveloperResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";

const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    const query: DeveloperResult = await client.query(
        'SELECT * FROM "developers" WHERE id = $1;',
        [id]
    );

    if(!query.rows[0]) throw new AppError("Developer not found.", 404);

    return next();
}

export default verifyIdExists;