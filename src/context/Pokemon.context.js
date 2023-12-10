import { createContext, useState } from "react";

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
