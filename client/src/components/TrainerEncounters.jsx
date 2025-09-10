import { useEffect, useState } from "react";
import { fetchTrainersByGeneration } from "../api/pokeatlas";

function Encounters({ generation, game, pokemons }) {
  const [trainers, setTrainers] = useState([]);
  const [activeTrainer, setActiveTrainer] = useState(null);

  // Load Trainer data
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTrainersByGeneration(generation, game);
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching trainers: ", error);
      }
    };
    loadData();
  }, [generation, game]);

  const getPokemonSprite = (name) => {
    const found = pokemons.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    return found?.sprites?.default || "";
  };

  return (
    <div className="space-y-6 p-4 w-2/3 min-h-screen mx-auto">
      {trainers.map((trainer, idx) => (
        <div
          key={trainer._id}
          className="bg-[#1F1F1F] rounded-xl shadow-md p-4 space-y-4 flex justify-between relative"
        >
          <div className="flex gap-6 ">
            {/* Trainer Name */}
            <h2 className="text-white text-2xl font-bold">{trainer.trainer}</h2>

            {/* Trainer Sprite */}
            <img src={trainer.sprite} className="w-24 h-24"></img>
            <button
              className="absolute right-4 top-4 text-[24px] text-white cursor-pointer"
              onClick={() =>
                setActiveTrainer((prev) => (prev === idx ? null : idx))
              }
            >
              {activeTrainer === idx ? "▲" : "▼"}
            </button>
          </div>

          {/* Team Panel */}
          {activeTrainer === idx && (
            <div className="grid grid-cols-3 gap-1  p-4 rounded-lg">
              {trainer.team.map((poke, idx) => (
                <div
                  key={idx}
                  className="bg-[#1F1F1F] rounded-lg p-3 flex flex-col items-center border-solid border-2 border-[#FF1C1C]"
                >
                  {/* Pokémon Sprite */}
                  <img
                    src={getPokemonSprite(poke.pokemon)}
                    alt={poke.pokemon}
                    className="w-32 h-32 mb-2 z-2"
                  />
                  <span className="block absolute size-32 bg-radial from-[#383636] from-10% to-[#121212] to-90% rounded-full z-1"></span>

                  {/* Pokémon Name */}
                  <h3 className="text-white text-lg font-bold text-center">
                    {poke.pokemon}
                  </h3>

                  {/* Pokemon Level & Types*/}
                  <div className="flex w-full justify-evenly items-center m-2 ">
                    <div className="flex flex-col items-center bg-[#1F1F1F] px-3 py-1 rounded-lg shadow-sm">
                      <span className="text-gray-500 text-lg font-bold text-center">
                        Level
                      </span>
                      <span className="text-white text-lg font-bold">
                        {poke.level}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-gray-500 text-lg font-bold text-center">
                        Types
                      </span>
                      <div className="flex gap-1 flex-wrap justify-center">
                        {poke.types.map((type, tidx) => (
                          <span
                            key={tidx}
                            className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${
                              type === "Grass"
                                ? "bg-[#53a93a]"
                                : type === "Fire"
                                ? "bg-[#e94127]"
                                : type === "Water"
                                ? "bg-[#5081c3]"
                                : type === "Normal"
                                ? "bg-[#a4a4a4]"
                                : type === "Fighting"
                                ? "bg-[#a4a4a4]"
                                : type === "Flying"
                                ? "bg-[#a192c9]"
                                : type === "Poison"
                                ? "bg-[#954b98]"
                                : type === "Electric"
                                ? "bg-[#f3d153]"
                                : type === "Ground"
                                ? "bg-[#a26522]"
                                : type === "Psychic"
                                ? "bg-[#a26522]"
                                : type === "Rock"
                                ? "bg-[#845c39]"
                                : type === "Ice"
                                ? "bg-[#a5d7d8]"
                                : type === "Bug"
                                ? "bg-[#5ca361]"
                                : type === "Dragon"
                                ? "bg-[#4c60a9]"
                                : type === "Ghost"
                                ? "bg-[#665ea7]"
                                : type === "Dark"
                                ? "bg-[#4e403f]"
                                : type === "Steel"
                                ? "bg-[#5b8196]"
                                : "bg-gray-500"
                            }`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Moves */}
                  <div className="grid grid-cols-2 gap-2 bg-[#2A2A2A] p-2 rounded-lg w-full">
                    {poke.moves.map((move, midx) => (
                      <div
                        key={midx}
                        className="bg-[#333] text-sm p-1 rounded-md border border-gray-600 text-white text-center"
                      >
                        {move}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Encounters;
