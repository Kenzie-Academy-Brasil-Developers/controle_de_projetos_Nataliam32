import { Request, Response, NextFunction } from "express";
import { ProjectResult } from "../interfaces";
import AppError from "../error";
import { client } from "../database";

const verifyIfProjectExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {userId} = req.body;

    if(!userId) {
        return next();
    }

    const query: ProjectResult = await client.query(
        'SELECT * FROM "projects" WHERE "id" = $1;',
        [userId]
    );

    if(query.rowCount === 0) {
        throw new AppError("Project not found.", 404);
    }

    return next();
};

export default verifyIfProjectExists;