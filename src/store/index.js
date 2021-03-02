import { createStore } from "vuex";

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

const store = createStore({
  modules: {},
  state() {
    return {
      pokemons: [],
      activePokemon: null,
      showSpecific: false,
      specificInfo: null,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
