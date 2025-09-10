import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  name: String,
  nationalDex: Number,
  types: [String],
  sprite: {
    default: String,
    official: String,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema, "pokemons");

export default Pokemon;
