import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import trainerRoutes from "./routes/trainersRoute.js";
import pokemonsRoutes from "./routes/pokemonsRoute.js";
import routesRoutes from "./routes/routesRoute.js";

const app = express();
app.use(cors());

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to PokeAtlas");
});

// Routes
app.use("/nuzlocke/trainers", trainerRoutes);
app.use("/nuzlocke/pokemons", pokemonsRoutes);
app.use("/nuzlocke/routes", routesRoutes);

// Connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/pokeatlas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB pokeatlas DB"))
  .catch((err) => console.err("MongoDB connection error: ", err));

// Listen on PORT
app.listen(3000, () => {
  console.log(`PokeAtlas API is running on http://localhost:3000`);
});

export default app;
