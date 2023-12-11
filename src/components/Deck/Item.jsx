export default function DeckItem({ admin, item, onItemClick, selectedPokemon }) {
  const isDisable = admin && selectedPokemon.includes(item.name);
  const onClick = () => {
    if (admin) {
      onItemClick && onItemClick(item)
    }
  };

  return (
    <div
      key={item.name}
      className={`data-item ${isDisable ? "disable" : ""}`}
      onClick={!isDisable ? onClick : undefined}
    >
      <img onError={function(event) {
        event.target.src = '/favicon.png'
      }} loading="lazy" src={item.img} />
      <span>{item.name}</span>
      {!admin && <span>⚡️ {item.power}</span>}
    </div>
  );
}