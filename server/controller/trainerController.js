import Trainer from "../models/Trainer.js";

// GET Trainers by Generation
export const getTrainersByGeneration = async (req, res) => {
  try {
    const { gen } = req.params;
    const { game } = req.query;

    const query = { generation: gen };
    if (game) {
      query.games = game;
    }

    const trainers = await Trainer.find(query);
    res.json(trainers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trainer" });
  }
};
