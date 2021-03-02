export default {
  addPokemonToState(state, payload) {
    //unordered
    state.pokemons.push(payload);
  },
  setPokemonAsActive(state, payload) {
    state.activePokemon = payload;
  },
  clearActivePokomen(state) {
    state.activePokemon = null;
    state.showSpecific = false;
  },
  showSpecific(state) {
    state.showSpecific = true;
  },
  hideSpecific(state) {
    state.showSpecific = false;
  },
  setSpecificInfo(state, payload) {
    state.specificInfo = payload;
  },
};
