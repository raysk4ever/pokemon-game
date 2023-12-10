import usePlayers from "../../hooks/usePlayers";

import DeckItem from "./Item";

function Deck({ title = "Deck", data = [], admin }) {
  const totalPower = data.reduce((acc, crr) => (acc += crr.power), 0);
  const { toggleActivePlayer, activePlayer } = usePlayers();
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
        {data.map((item) => <DeckItem key={item.name} item={item} admin={admin} />)}
      </section>
    </section>
  );
}

export default Deck;
