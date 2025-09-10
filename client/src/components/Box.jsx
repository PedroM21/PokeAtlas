import { useState, useEffect } from "react";
import ActiveTeam from "../components/ActiveTeam";
import CapturedBox from "../components/CapturedBox";
import DeadBox from "../components/DeadBox";

function Box({ pokemonStatus, pokemons }) {
  // Box Pagination
  const [currentBox, setCurrentBox] = useState(1);
  const [currentDeadBox, setCurrentDeadBox] = useState(1);
  const totalBoxes = 8;

  return (
    <>
      {/* Team */}
      <div className="flex flex-col justify-center mb-4">
        <p className="text-white text-center mb-4">Active Team</p>
        <ActiveTeam pokemonStatus={pokemonStatus} pokemons={pokemons} />
      </div>

      {/* Storage Box */}
      <div className="flex justify-center gap-18">
        <CapturedBox
          pokemonStatus={pokemonStatus}
          pokemons={pokemons}
          currentBox={currentBox}
          setCurrentBox={setCurrentBox}
          totalBoxes={totalBoxes}
        />
        <DeadBox
          pokemonStatus={pokemonStatus}
          pokemons={pokemons}
          currentDeadBox={currentDeadBox}
          setCurrentDeadBox={setCurrentDeadBox}
          totalBoxes={totalBoxes}
        />
      </div>
    </>
  );
}

export default Box;
