import { Router } from "express";
import { developerControllers, developerInfosControllers } from "../controllers";
import middleware from "../middleware";

const developerRouter: Router = Router();

developerRouter.post("", middleware.uniqueEmail, developerControllers.create);
developerRouter.get("/:id", middleware.verifyIdExists,  developerControllers.retrieve);
developerRouter.patch("/:id", middleware.verifyIdExists, middleware.uniqueEmail, developerControllers.update);
developerRouter.delete("/:id", middleware.verifyIdExists, developerControllers.destroy);

developerRouter.post("/:id/infos", middleware.verifyDevInfoExists, middleware.verifyIdExists, developerInfosControllers.create);

export default developerRouter;