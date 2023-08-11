import express, { Application, json } from "express";
import "dotenv/config";
import handleErrorMiddleware from "./middleware/handleError.middleware";
import { developerRouter, projectRouter } from "./routers";

const app: Application = express();
app.use(json());

app.use("/developers", developerRouter);
app.use("/projects", projectRouter);

app.use(handleErrorMiddleware.error);

export default app;
