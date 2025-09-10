import { Router } from "express";
import { getTrainersByGeneration } from "../controller/trainerController.js";

const trainersRoutes = Router();

// GET trainers by generation
trainersRoutes.get("/:gen", getTrainersByGeneration);

export default trainersRoutes;
