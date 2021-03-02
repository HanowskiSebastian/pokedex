import { HTTP } from "./index";
import router from "../router/index";

export default {
  getPokemonByNumber(context, payload) {
    const pokemons = context.getters.getAllPokemons;
    // check if there are any pokemons in current state
    let pokemon;
    if (pokemons.length > 0) {
      pokemon = pokemons.find((poke) => {
        return poke.id === parseInt(payload.number);
      });
      //and return that pokemon, setting as active for getter to easily access an active pok
      context.commit("setPokemonAsActive", pokemon);
      context.commit("hideSpecific");
      router.push(`/pokedex/${payload.number}`);
    }
    //otherwise call API to add pokemon to current state
    if (typeof pokemon === "undefined") {
      console.log("here");
      let resourcePok;
      HTTP.get(`pokemon/${payload.number}`)
        .then((response) => {
          resourcePok = response.data;
          context.commit("addPokemonToState", resourcePok);
          //and return that pokemon, setting as active for getter to easily access an active pok
          context.commit("setPokemonAsActive", resourcePok);
          context.commit("hideSpecific");
          router.push(`/pokedex/${payload.number}`);
        })
        .catch((error) => {
          console.log(error, "pokemon not found");
          context.commit("hideSpecific");
          context.commit("setPokemonAsActive", null);
        });
    }
  },
  getPokemonByName(context, payload) {
    const pokemons = context.getters.getAllPokemons;
    const pokeName = payload.name.toLowerCase();
    // check if there are any pokemons in current state
    let pokemon;
    if (pokemons.length > 0) {
      pokemon = pokemons.find((poke) => {
        return poke.name.toLowerCase() === pokeName;
      });
      //and return that pokemon, setting as active for getter to easily access an active pok
      if (pokemon) {
        context.commit("setPokemonAsActive", pokemon);
        router.push(`/pokedex/${pokemon.id}`);
      }
    }
    //otherwise call API to add pokemon to current state
    if (typeof pokemon === "undefined") {
      console.log("here");
      let resourcePok;
      HTTP.get(`pokemon/${pokeName}`)
        .then((response) => {
          resourcePok = response.data;
          context.commit("addPokemonToState", resourcePok);
          //and return that pokemon, setting as active for getter to easily access an active pok
          context.commit("setPokemonAsActive", resourcePok);
          router.push(`/pokedex/${resourcePok.id}`);
        })
        .catch((error) => {
          console.log(error, "pokemon not found");
          context.commit("setPokemonAsActive", null);
          router.push(`/pokedex/0`);
        });
    }
  },
  setSpecificInfo(context, payload) {
    context.commit("setSpecificInfo", payload);
    context.commit("showSpecific");
  },
  hideSpecific(context) {
    context.commit("hideSpecific");
  },
  clearPokedex(context) {
    context.commit("clearActivePokomen");
  },
};
