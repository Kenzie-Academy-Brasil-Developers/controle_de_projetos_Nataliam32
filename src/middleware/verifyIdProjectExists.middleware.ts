import { Request, Response, NextFunction } from "express";
import { DeveloperInfosResult } from "../interfaces";
import AppError from "../error";
import { client } from "../database";

const verifyIfProjectExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId  = req.params.id;

    if(!userId) {
        return next();
    }

    const query: DeveloperInfosResult = await client.query(
        `SELECT * FROM projects WHERE "id" = $1;`,
        [userId]
    );

    if(query.rowCount === 0) {
        throw new AppError("Project not found.", 404);
    }

    return next();
};

export default verifyIfProjectExists;