import { useEffect } from "react"
import usePlayers from "../hooks/usePlayers"

function Header() {
  const {players} = usePlayers()
  
  return (
    <header>
      <h1>Pokemon Game</h1>
      <section className="powers">
      {Object.values(players).map((p) => (
        <div className="power-item" key={p.title}>
          <img className="user-img" src={`/${p.title}.png`} width={40} />
          <span>⚡️{p.power}</span>
        </div>
      ))}
      </section>
    </header>
  )
}
export default Header
