import Logo from "../assets/images/PokeAtlas.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-full bg-[#222] h-screen flex flex-col">
      <img src={Logo} className="w-1/4 h-1/2 m-auto" alt="Logo" />
      <p className="w-1/2 mx-auto text-white">
        PokéAtlas brings the thrill of the Nuzlocke challenge right to your
        fingertips. For the uninitiated, a Nuzlocke is a self-imposed set of
        rules for Pokémon games that makes every battle more intense: You can
        only catch the first Pokémon you encounter in each area. If a Pokémon
        faints, it’s gone for good. Every Pokémon must be given a nickname to
        forge a true bond.
      </p>
      <Link
        to="/nuzlocke"
        className="block cursor-pointer bg-[#FF1C1C] p-4 rounded-lg shadow-md w-[200px] hover:bg-[#dd0c0c] m-auto"
      >
        <button className="text-white text-center">Start</button>
      </Link>
    </div>
  );
}

export default Home;
