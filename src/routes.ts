import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const clasesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/classes", clasesController.index);
routes.post("/classes", clasesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
