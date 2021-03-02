<template>
  <router-link to="/"><h1>pokedex</h1></router-link>
  <div class="row">
    <div class="col-lg-6">
      <base-card :mode="{ position: 'top left' }"
        ><pokemon-search></pokemon-search
      ></base-card>
    </div>
    <div class="col-lg-6">
      <base-card :mode="{ position: 'bottom right' }">
        <whos-that-pokemon></whos-that-pokemon>
        <specific-details v-if="showSpecific"></specific-details>
      </base-card>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-lg-12"></div>
  </div>
</template>

<script>
import PokemonSearch from "../components/pokedex/PokemonSearch";
import WhosThatPokemon from "../components/pokedex/WhosThatPokemon";
import SpecificDetails from "../components/specific/SpecificDetails";

export default {
  components: { PokemonSearch, WhosThatPokemon, SpecificDetails },
  data() {
    return {};
  },
  methods: {
    toggleSpecific() {
      this.showSpecific = !this.showSpecific;
    },
  },
  computed: {
    showSpecific() {
      return this.$store.getters.showSpecific;
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  height: 100%;
  .col-lg-6 {
    height: 100%;
    .pokecard {
      height: 100%;
    }
  }
}
</style>
