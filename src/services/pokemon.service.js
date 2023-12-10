import AxiosService from "./axios.service";

class PokemonService extends AxiosService {
  getPokemon() {
    return this.api.get("pokemon?limit=100&offset=0");
  }
}
export default PokemonService;
