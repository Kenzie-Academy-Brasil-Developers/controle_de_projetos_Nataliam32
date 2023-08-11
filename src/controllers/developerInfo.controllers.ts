import { Request, Response } from "express";
import { DeveloperCreate, DeveloperInfos } from "../interfaces";
import { developerInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload: DeveloperCreate = { ...req.body, developerId: req.params.id };
    const profile: DeveloperInfos = await developerInfosServices.create(payload);
  
    return res.status(201).json(profile);
  };
  
  export default { create };