import { useMemo } from "react";

function DeadBox({
  pokemonStatus,
  pokemons,
  currentDeadBox,
  setCurrentDeadBox,
  totalBoxes,
}) {
  const perBox = 12;
  const dead = Object.values(pokemonStatus).filter((p) => p.status === "Dead");

  const currentPokemon = useMemo(() => {
    const start = (currentDeadBox - 1) * perBox;
    const end = start + perBox;
    return dead.slice(start, end);
  }, [dead, currentDeadBox]);

  const getPokemonSprite = (name) => {
    const found = pokemons.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    return found?.sprites?.default || "";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Pagination */}
      <div className="flex items-center gap-4 text-white">
        <button
          className="px-4 py-2 bg-[#1F1F1F] rounded-lg disabled:opacity-50"
          onClick={() => setCurrentDeadBox((prev) => Math.max(1, prev - 1))}
          disabled={currentDeadBox === 1}
        >
          ◀
        </button>
        <span>Dead Box {currentDeadBox}</span>
        <button
          className="px-4 py-2 bg-[#1F1F1F] rounded-lg disabled:opacity-50"
          onClick={() =>
            setCurrentDeadBox((prev) => Math.min(totalBoxes, prev + 1))
          }
          disabled={currentDeadBox === totalBoxes}
        >
          ▶
        </button>
      </div>

      {/* Box Grid */}
      <div className="grid grid-cols-4 grid-rows-5 gap-2 mx-auto ">
        {currentPokemon.map((dead, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-2 shadow-md border rounded-xl bg-[#1F1F1F] "
          >
            <img
              src={getPokemonSprite(dead.name)}
              alt={dead.name}
              className="w-24 h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeadBox;
