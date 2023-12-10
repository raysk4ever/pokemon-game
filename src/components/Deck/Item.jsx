import usePlayers from "../../hooks/usePlayers";

export default function DeckItem({ admin, item }) {
  const { addPokemonToPlayer, selectedPokemon } = usePlayers();

  const isDisable = admin && selectedPokemon.includes(item.name);
  const onClick = () => {
    admin && addPokemonToPlayer(item);
  };

  return (
    <div
      key={item.name}
      className={`data-item ${isDisable ? "disable" : ""}`}
      onClick={!isDisable ? onClick : undefined}
    >
      <img src={item.img} width={100} />
      <span>{item.name}</span>
      <span>⚡️ {item.power}</span>
    </div>
  );
}