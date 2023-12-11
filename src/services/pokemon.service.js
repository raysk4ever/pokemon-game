import AxiosService from "./axios.service";

class PokemonService extends AxiosService {
  static limit = 300
  static offset = Math.round(Math.random(0) * 100)
  getPokemon() {
    return this.api.get(`pokemon?limit=${PokemonService.limit}&offset=${PokemonService.offset}`);
  }
}
export default PokemonService;
