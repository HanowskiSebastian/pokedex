<template>
  <section>
    <header class="d-flex justify-content-between align-items-center">
      <h4>Searching far and wild...</h4>
      <div class="orb"></div>
    </header>
    <div class="search">
      <div class="my-4">
        <div class="row d-flex justify-content-center align-items-center">
          <button class="btn btn-primary mr-4" @click="setSearchType('name')">
            Search by name
          </button>
          <button class="btn btn-primary" @click="setSearchType('number')">
            Search by number
          </button>
        </div>
        <div
          class="d-flex-justify-content-between-align-items-center"
          v-if="searchType === 'name'"
        >
          <input
            id="pokeName"
            class="form-control mt-4"
            type="text"
            placeholder="Type pokemon name e.g. Pikachu"
            v-model="pokemonToSearchByName"
          />
          <button class="btn btn-success mt-4" @click="searchByName">
            Go!
          </button>
        </div>
        <div
          class="d-flex-justify-content-between-align-items-center"
          v-if="searchType === 'number'"
        >
          <input
            v-if="searchType === 'number'"
            id="pokeNumber"
            class="form-control mt-4"
            type="number"
            placeholder="Enter pokemon number e.g. 113"
            v-model="pokemonToSearchByNumber"
          />
          <button class="btn btn-success mt-4" @click="searchByNumber">
            Go!
          </button>
        </div>
      </div>
      <div class="border-top pt-4">
        <header>
          <h4>Want some advanced search?</h4>
        </header>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pokemonToSearchByName: "",
      pokemonToSearchByNumber: null,
      searchType: "",
    };
  },

  methods: {
    searchByNumber() {
      this.$store.dispatch("getPokemonByNumber", {
        number: this.pokemonToSearchByNumber,
      });
    },
    searchByName() {
      this.$store.dispatch("getPokemonByName", {
        name: this.pokemonToSearchByName,
      });
    },
    setSearchType(type) {
      this.searchType = type;
    },
  },
};
</script>


<style lang="scss" scoped>
.orb {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #3caeff;
  border: 4px solid #ffd400;
}
</style>