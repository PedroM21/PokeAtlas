import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  trainer: String,
  generation: String,
  games: [String],
  type: String,
  location: String,
  sprite: String,
  team: [
    {
      pokemon: String,
      level: Number,
      types: [String],
      moves: [String],
    },
  ],
});

const Trainer = mongoose.model("Trainer", trainerSchema, "trainers");

export default Trainer;
