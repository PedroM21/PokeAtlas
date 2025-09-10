import { Router } from "express";
import { getRoutesByGeneration } from "../controller/routesController.js";

const routesRoutes = Router();

// GET all Routes
routesRoutes.get("/:gen", getRoutesByGeneration);

export default routesRoutes;
