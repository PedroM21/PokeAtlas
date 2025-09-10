import { useState, useEffect } from "react";
import { fetchPokemons } from "../api/pokeatlas";
import TrainerEncounters from "../components/TrainerEncounters";
import PokemonEncounters from "../components/PokemonEncounters";
import Box from "../components/Box";

function Nuzlocke() {
  const gens = ["1", "2", "3", "4", "5", "6"];
  const games = ["SoulSilver", "HeartGold", "Black", "White"];
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedGen, setSelectedGen] = useState("4");
  const [selectedGame, setSelectedGame] = useState("");
  const [pokemonStatus, setPokemonStatus] = useState({});
  const [pokemons, setPokemons] = useState([]);

  // Load pokemon data
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (error) {
        console.error("Failed to fetch pokemons", error);
      }
    };
    loadData();
    console.log("Fetched all pokemon");
  }, []);

  return (
    <div className="bg-[#121212] w-full min-h-screen ">
      {/* Menu Buttons */}
      <div className="flex gap-6 justify-center text-white">
        <div
          className={`rounded-lg shadow-md transition-all duration-300 ${
            activeMenu === "game" ? "bg-[#dd0c0c]" : "bg-[#1F1F1F]"
          }`}
        >
          <button
            className="cursor-pointer p-4 rounded-lg shadow-md w-[200px] hover:bg-[#dd0c0c]"
            onClick={() => setActiveMenu("game")}
          >
            Game
          </button>
        </div>
        <div
          className={`rounded-lg shadow-md transition-all duration-300 ${
            activeMenu === "encounters" ? "bg-[#dd0c0c]" : "bg-[#1F1F1F]"
          }`}
        >
          <button
            className="cursor-pointer p-4 rounded-lg shadow-md w-[200px] hover:bg-[#dd0c0c]"
            onClick={() => setActiveMenu("encounters")}
          >
            Encounters
          </button>
        </div>
        <div
          className={`rounded-lg shadow-md transition-all duration-300 ${
            activeMenu === "box" ? "bg-[#dd0c0c]" : "bg-[#1F1F1F]"
          }`}
        >
          <button
            className="cursor-pointer p-4 rounded-lg shadow-md w-[200px] hover:bg-[#dd0c0c]"
            onClick={() => setActiveMenu("box")}
          >
            Box
          </button>
        </div>
      </div>

      {/* Generation and Game Selectors */}
      <div className="flex gap-6 justify-center items-center m-4">
        <div>
          <label htmlFor="generation" className="text-white">
            Generation
          </label>
          <select
            className="text-white"
            value={selectedGen}
            onChange={(e) => setSelectedGen(e.target.value)}
          >
            {gens.map((gen) => (
              <option key={gen} value={gen} className="bg-red-500">
                {gen}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="game" className="text-white">
            Game
          </label>
          <select
            className="text-white"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            {games.map((game) => (
              <option key={game} value={game} className="bg-red-500">
                {game}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Components */}
      <div className={activeMenu === "game" ? "block" : "hidden"}>
        <TrainerEncounters
          generation={selectedGen}
          game={selectedGame}
          pokemons={pokemons}
        />
      </div>
      <div className={activeMenu === "encounters" ? "block" : "hidden"}>
        <PokemonEncounters
          generation={selectedGen}
          game={selectedGame}
          pokemonStatus={pokemonStatus}
          setPokemonStatus={setPokemonStatus}
          pokemons={pokemons}
        />
      </div>
      <div className={` ${activeMenu === "box" ? "block" : "hidden"}`}>
        <Box pokemonStatus={pokemonStatus} pokemons={pokemons} />
      </div>
    </div>
  );
}

export default Nuzlocke;
