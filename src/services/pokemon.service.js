import AxiosService from "./axios.service";

class PokemonService extends AxiosService {
  getPokemon() {
    const limit = 300
    const offset = Math.round(Math.random(0) * 100)
    return this.api.get(`pokemon?limit=${limit}&offset=${offset}`);
  }
}
export default PokemonService;
