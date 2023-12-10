import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { PokemonProvider } from "./context/Pokemon.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </StrictMode>
);
