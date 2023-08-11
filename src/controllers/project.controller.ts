import { Request, Response } from "express";
import { Projects } from "../interfaces";
import { projectServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await projectServices.create(req.body);
    return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await projectServices.retrieve(req.params.id);

    return res.status(200).json(project);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const project: Projects = await projectServices.update(req.body, req.params.id);
    return res.status(200).json(project);
}

export default { create, retrieve, update };