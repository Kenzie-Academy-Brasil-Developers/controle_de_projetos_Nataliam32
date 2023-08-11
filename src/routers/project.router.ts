import { Router } from "express";
import { projectController } from "../controllers";
import middleware from "../middleware";

const projectRouter: Router = Router();

projectRouter.post("", projectController.create);
projectRouter.get("/:id", middleware.verifyIfProjectExists, projectController.retrieve);
projectRouter.patch("/:id", middleware.verifyIfProjectExists, projectController.update);

export default projectRouter;