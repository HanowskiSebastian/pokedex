export default {
  //returns all pokemons from current state
  getAllPokemons(state) {
    return state.pokemons;
  },
  getActivePokemon(state) {
    return state.activePokemon;
  },
  showSpecific(state) {
    return state.showSpecific;
  },
  getSpecificInfo(state) {
    return state.specificInfo;
  },
};
