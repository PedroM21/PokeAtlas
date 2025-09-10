import { Router } from "express";
import { getPokemon } from "../controller/pokemonController.js";

const pokemonsRoutes = Router();

// GET all Pokemon
pokemonsRoutes.get("/", getPokemon);

export default pokemonsRoutes;
