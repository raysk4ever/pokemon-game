import useAudio from "../../hooks/useAudio";
import usePlayers from "../../hooks/usePlayers";

import DeckItem from "./Item";
import {AUDIOS} from '../../contants'

function Deck({ title = "Deck", data = [], admin }) {
  const audio = useAudio(AUDIOS.beep)
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
        {data.map((item) => <DeckItem key={item.name} item={item} admin={admin} onItemClick={() => audio.play()} />)}
      </section>
    </section>
  );
}

export default Deck;
