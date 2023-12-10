import usePlayers from "../hooks/usePlayers";
import usePokemon from "../hooks/usePokemon";

function Deck({ title = "Deck", data = [], onItemClick = () => {}, admin }) {
  const totalPower = data.reduce((acc, crr) => (acc += crr.power), 0);
  const { activePlayer, addPokemon, selectedPokemon } = usePokemon();
  const { toggleActivePlayer } = usePlayers();
  return (
    <section className="deck">
      <section className="header">
        <h1>
          {title} - ⚡️ {totalPower}
        </h1>
        {admin && (
          <button className="active-player" onClick={toggleActivePlayer}>
            Active Player is <strong>{activePlayer}</strong>
          </button>
        )}
      </section>
      <section className="data-list">
        {data.map((item) => {
          const isDisable = admin && selectedPokemon.includes(item.name);
          const onClick = () => {
            admin && addPokemon(item);
          };
          return (
            <div
              className={`data-item ${isDisable ? "disable" : ""}`}
              onClick={!isDisable ? onClick : undefined}
            >
              <img src={item.img} width={100} />
              <span>{item.name}</span>
              <span>⚡️ {item.power}</span>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Deck;
