import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [players, setPlayers] = useState({
    ash: {
      title: "Ash",
      deck: [],
    },
    misty: {
      title: "Misty",
      deck: [],
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
