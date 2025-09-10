import Pokemon from "../models/Pokemon.js";

// GET all Pokemon
export const getPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
    console.log(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch pokemons" });
  }
};
