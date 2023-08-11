import { Router } from "express";
import { projectController } from "../controllers";
import middleware from "../middleware";

const projectRouter: Router = Router();

projectRouter.post("", middleware.verifyIfDevExists, projectController.create);
projectRouter.get("/:id", middleware.verifyIfProjectExists, middleware.verifyIfProjectExists, projectController.retrieve);
projectRouter.patch("/:id", middleware.verifyIfDevExists, middleware.verifyIfProjectExists, projectController.update);

export default projectRouter;