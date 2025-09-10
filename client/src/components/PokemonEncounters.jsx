import { useEffect, useState } from "react";
import { fetchPokemons, fetchRoutesByGeneration } from "../api/pokeatlas";

function PokemonEncounters({
  generation,
  game,
  pokemonStatus,
  setPokemonStatus,
  pokemons,
}) {
  const statuses = ["-- Status --", "Captured", "Active", "Missed", "Dead"];
  const [encounters, setEncounters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  // Load route data
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRoutesByGeneration(generation, game);
        console.log("Fetched encounters:", data);
        setEncounters(data);
      } catch (error) {
        console.error("Error fetching routes: ", error);
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
    <div className="flex-1 w-1/2 mx-auto">
      <table className="text-white w-full">
        <thead>
          <tr className=" border-b-2 border-[#2A2A2A]">
            <th className="p-4">Location</th>
            <th>Pokemon</th>
            <th>Nickname</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {encounters.map((encounter, eidx) => (
            <tr key={eidx} className="border-b-2 border-[#2A2A2A]">
              <td>{encounter.location}</td>
              <td className="p-4">
                <div className="flex items-center justify-center">
                  {selectedPokemon[eidx] && (
                    <img
                      src={getPokemonSprite(selectedPokemon[eidx])}
                      alt={selectedPokemon[eidx]}
                    />
                  )}
                  <input
                    type="text"
                    placeholder="-- Select Pokemon --"
                    value={selectedPokemon[eidx] || ""}
                    readOnly
                    onFocus={() => setActiveIndex(eidx)}
                    className="m-2 p-2 border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-[#FF1C1C] focus:border-[#FF1C1C] focus:border-b-0"
                  />
                </div>
                {activeIndex === eidx && (
                  <div className="bg-[#1F1F1F] overflow-y-auto w-1/4 h-[300px] absolute rounded-lg left-[45%] transform translate-x-[-45%]">
                    <ul className="flex flex-col justify-center ">
                      {encounter.pokemons.map((pokemon, pidx) => (
                        <li
                          key={pidx}
                          onMouseDown={() => {
                            setSelectedPokemon((prev) => ({
                              ...prev,
                              [eidx]: pokemon,
                            }));
                            setActiveIndex(null);
                          }}
                          className="cursor-pointer hover:bg-[#2A2A2A] p-2 rounded flex items-center gap-2"
                        >
                          <div className="flex items-center justify-center">
                            <img src={getPokemonSprite(pokemon)} />
                            {pokemon}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Nickname"
                  className="border-b-2 border-white p-2 outline-0"
                />
              </td>
              <td>
                <select
                  className="p-2"
                  value={pokemonStatus[eidx]?.status || "-- Status --"}
                  onChange={(e) => {
                    const status = e.target.value;

                    const activeCount = Object.values(pokemonStatus).filter(
                      (p) => p.status === "Active"
                    ).length;

                    if (status === "Active" && activeCount >= 6) {
                      alert("You can only have 6 Pokemon in your active team!");
                      return;
                    }

                    setPokemonStatus((prev) => ({
                      ...prev,
                      [eidx]: {
                        name: selectedPokemon[eidx],
                        status,
                      },
                    }));
                  }}
                >
                  {statuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                      className="bg-[#1F1F1F]"
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonEncounters;
