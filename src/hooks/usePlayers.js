import { useContext } from "react";
import { PokemonContext } from "../context/Pokemon.context";

function usePlayers() {
  const {
    players,
    setPlayers,
    activePlayer,
    setActivePlayer,
    setSelectedPokemon,
    selectedPokemon,
  } = useContext(PokemonContext);

  const addNewPlayer = (newPlayer) => {
    setPlayers((crr) => ({
      ...crr,
      ...newPlayer,
    }));
  };

  const toggleActivePlayer = () => {
    setActivePlayer((crr) => (crr === "ash" ? "misty" : "ash"));
  };

  const addPokemonToPlayer = (player, pokemon) => {
    setPlayers((crr) => ({
      ...crr,
      [player]: {
        ...crr[player],
        deck: [pokemon, ...crr[player].deck],
      },
    }));
    toggleActivePlayer();
    setSelectedPokemon((crr) => [...crr, pokemon.name]);
  };

  return {
    players,
    playersArr: Object.keys(players),
    activePlayer,
    setActivePlayer,
    selectedPokemon,
    addNewPlayer,
    addPokemonToPlayer,
    toggleActivePlayer,
  };
}

export default usePlayers;
