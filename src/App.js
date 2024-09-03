import { Deck, Header } from "./components";
import usePlayers from "./hooks/usePlayers";
import usePokemon from "./hooks/usePokemon";
import "./styles.scss";

export default function App() {
  const { pokemons } = usePokemon();
  const { playersArr, players } = usePlayers();

  // testing
  return (
    <main className="App">
      <Header />
      <Deck admin data={pokemons} title="All Pokemons" />
      <section className="app-bottom">
        {playersArr.map((p) => (
          <Deck key={p} data={players[p].deck} {...players[p]} />
        ))}
      </section>
    </main>
  );
}
