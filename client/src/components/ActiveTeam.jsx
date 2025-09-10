function ActiveTeam({ pokemonStatus, pokemons }) {
  const active = Object.values(pokemonStatus).filter(
    (p) => p.status === "Active"
  );

  const getPokemonSprite = (name) => {
    const found = pokemons.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    return found?.sprites?.default || "";
  };

  return (
    <div className="flex justify-center gap-2">
      {active.map((party, i) => (
        <div
          key={i}
          className="flex flex-col items-center p-2 shadow-md border rounded-xl bg-[#1F1F1F] "
        >
          <img
            src={getPokemonSprite(party.name)}
            alt={party.name}
            className="w-24 h-24"
          />
        </div>
      ))}
    </div>
  );
}

export default ActiveTeam;
