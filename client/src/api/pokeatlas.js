const BASE_URL = "http://localhost:3000";

// Fetch all pokemon
export const fetchPokemons = async () => {
  const response = await fetch(`${BASE_URL}/nuzlocke/pokemons`);
  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }
  return await response.json();
};

// Fetch trainers by generation
export const fetchTrainersByGeneration = async (gen, game) => {
  const url = game
    ? `${BASE_URL}/nuzlocke/trainers/${gen}?game=${encodeURIComponent(game)}`
    : `${BASE_URL}/nuzlocke/trainers/${gen}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch trainers");
  }
  return await response.json();
};

// Fetch routes by generation
export const fetchRoutesByGeneration = async (gen, game) => {
  const url = game
    ? `${BASE_URL}/nuzlocke/routes/${gen}?game=${encodeURIComponent(game)}`
    : `${BASE_URL}/nuzlocke/routes/${gen}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch routes");
  }
  return await response.json();
};
