<template>
  <section class="container row">
    <div class="col-lg-12">
      <transition name="poke-search">
        <div
          v-if="!activePokemon"
          class="screen"
          :class="{
            disabled: screenIsOff && !activePokemon,
          }"
        ></div>
        <div
          v-else
          class="screen"
          :style="{
            background: getPokemonImg,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
      </transition>
    </div>
  </section>
  <section class="details">
    <router-view name="pokemonDetails"></router-view>
    <div class="row d-flex justify-content-center mt-4">
      <button
        class="btn btn-primary mr-2"
        @click="getPrevious"
        :disabled="!activePokemon || getPokemonId < 2"
      >
        Previous
      </button>
      <button class="btn btn-primary mr-2" @click="getRandom">R</button>
      <button
        class="btn btn-primary"
        @click="getNext"
        :disabled="!activePokemon || getPokemonId === maxPokemonNumber"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activePokemon: null,
      screenIsOff: true,
      pokemonImg: "",
      maxPokemonNumber: 500, // max just to disable next button and set max value for random, could be dynamic in the future
    };
  },
  computed: {
    getActivePokemon() {
      return this.$store.getters.getActivePokemon;
    },
    getPokemonId() {
      return this.activePokemon.id;
    },
    getPokemonImg() {
      this.setPokemonImg(this.getPokemonId);
      console.log(this.pokemonImg);
      return this.pokemonImg;
    },
  },
  watch: {
    getActivePokemon(newValue) {
      this.activePokemon = newValue;
    },
  },
  methods: {
    setPokemonImg(id) {
      this.pokemonImg = `url(https://pokeres.bastionbot.org/images/pokemon/${id}.png) top center`;
    },
    getPrevious() {
      if (this.activePokemon && this.getPokemonId > 1) {
        this.$store.dispatch("getPokemonByNumber", {
          number: parseInt(this.getPokemonId) - 1,
        });
      }
    },
    getNext() {
      if (this.activePokemon && this.getPokemonId < this.maxPokemonNumber) {
        this.$store.dispatch("getPokemonByNumber", {
          number: parseInt(this.getPokemonId) + 1,
        });
      }
    },
    getRandom() {
      this.$store.dispatch("getPokemonByNumber", {
        number: Math.floor(Math.random() * (this.maxPokemonNumber - 1)) + 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  :first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .screen {
    display: block;
    width: 250px;
    height: 200px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 25%;
    &.disabled {
      background: #3caeff;
    }
  }
  .poke-search-enter-active,
  .poke-search-leave-active {
    transform: rotate3d(0, 1, 0, 0deg);
    transition: transform 0.8s;
  }

  .poke-search-enter-from,
  .poke-search-leave-to {
    transform: rotate3d(0, 1, 0, 720deg);
  }
  .details {
    margin-top: 280px;
  }
}
</style>