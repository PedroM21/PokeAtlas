import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  generation: String,
  games: [String],
  location: [String],
  pokemons: [String],
});

const Route = mongoose.model("Route", routeSchema, "routes");

export default Route;
