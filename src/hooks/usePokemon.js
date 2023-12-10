import { useEffect, useState, useMemo } from "react";
import PokemonService from "../services/pokemon.service";
import usePlayers from "./usePlayers";

function usePokemon() {
  const pokemon = useMemo(() => new PokemonService(), []);
  const [pokemons, setPokemons] = useState([]);
  const { addPokemonToPlayer, activePlayer, setActivePlayer, selectedPokemon } =
    usePlayers();

  const getPokemon = async () => {
    const {
      data: { results = [] },
    } = await pokemon.getPokemon();
    setPokemons(() =>
      results.map((p) => ({
        ...p,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          p.url.match(/pokemon\/(\d+)/)[1]
        }.png`,
        power: Math.round(Math.random() * 100),
      }))
    );
  };

  const addPokemon = (pokemon) => {
    addPokemonToPlayer(activePlayer, pokemon);
  };

  useEffect(() => {
    if (!pokemons.length) {
      getPokemon();
    }
  }, []);

  return {
    pokemons,
    activePlayer,
    addPokemon,
    selectedPokemon,
  };
}

export default usePokemon;
