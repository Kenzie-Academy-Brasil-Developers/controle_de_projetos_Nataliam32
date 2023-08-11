import { Request, Response, NextFunction } from "express";
import { ProjectResult } from "../interfaces";
import { client } from "../database";
import AppError from "../error";

const verifyIfDevExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { developerId } = req.body;

    const queryResult: ProjectResult = await client.query(
        `SELECT * FROM developers WHERE id = $1;`,
        [developerId]
    );

    const developer = queryResult.rows[0];

    if(!developer){
        throw new AppError("Developer not found.", 404)
    };
    
    return next();
};

export default verifyIfDevExists;
