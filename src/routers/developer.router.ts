import { Router } from "express";
import { developerControllers } from "../controllers";

const developerRouter: Router = Router();

developerRouter.post("", developerControllers.create);

export default developerRouter;