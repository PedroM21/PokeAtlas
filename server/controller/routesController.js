import Route from "../models/Route.js";

// GET all Routes
export const getRoute = async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
    console.log(routes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch all routes" });
  }
};

// GET Routes by Generation
export const getRoutesByGeneration = async (req, res) => {
  try {
    const { gen } = req.params;
    const { game } = req.query;

    const query = { generation: gen };
    if (game) {
      query.games = game;
    }

    const routes = await Route.find(query);
    res.json(routes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch routes" });
  }
};
