import { useMemo } from "react";

function CapturedBox({
  pokemonStatus,
  pokemons,
  currentBox,
  setCurrentBox,
  totalBoxes,
}) {
  const perBox = 12;

  const captured = Object.values(pokemonStatus).filter(
    (p) => p.status === "Captured"
  );

  const currentPokemon = useMemo(() => {
    const start = (currentBox - 1) * perBox;
    const end = start + perBox;
    return captured.slice(start, end);
  }, [captured, currentBox]);

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
          onClick={() => setCurrentBox((prev) => Math.max(1, prev - 1))}
          disabled={currentBox === 1}
        >
          ◀
        </button>
        <span>Alive Box {currentBox}</span>
        <button
          className="px-4 py-2 bg-[#1F1F1F] rounded-lg disabled:opacity-50"
          onClick={() =>
            setCurrentBox((prev) => Math.min(totalBoxes, prev + 1))
          }
          disabled={currentBox === totalBoxes}
        >
          ▶
        </button>
      </div>

      {/* Box Grid */}
      <div className="grid grid-cols-4 grid-rows-5 gap-2 mx-auto ">
        {currentPokemon.map((caught, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-2 shadow-md border rounded-xl bg-[#1F1F1F] "
          >
            <img
              src={getPokemonSprite(caught.name)}
              alt={caught.name}
              className="w-24 h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CapturedBox;
