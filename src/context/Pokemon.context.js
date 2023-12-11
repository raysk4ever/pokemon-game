import { createContext, useEffect, useState } from "react";
import PokemonService from '../services/pokemon.service'
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [players, setPlayers] = useState({
    ash: {
      title: "Ash",
      deck: [],
      power: 0
    },
    misty: {
      title: "Misty",
      deck: [],
      power: 0
    },
  });
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const [activePlayer, setActivePlayer] = useState("ash");

  useEffect(() => {
    if (selectedPokemon.length === PokemonService.limit) {
      
      setWinner()
    }
  }, [selectedPokemon.length])

  return (
    <PokemonContext.Provider
      value={{
        players,
        setPlayers,
        activePlayer,
        setActivePlayer,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
