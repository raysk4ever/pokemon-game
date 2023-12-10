import { useState } from "react";

function useMyDeck() {
  const [myPokemon, setMyPokemon] = useState([]);
  addPokemonToMyDeck = (pokemon) => {
    setMyPokemon((crr) => [pokemon, ...crr]);
  };
  return {
    myPokemon,
    addPokemonToMyDeck,
  };
}

export default useMyDeck;
