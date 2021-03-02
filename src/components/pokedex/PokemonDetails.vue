<template>
  <section>
    <div v-if="activePokemon != null">
      <h2 class="text-center text-capitalize">{{ getPokemonName }}</h2>
      <div class="details">
        <div class="row">
          <div class="col-lg-6">Types:</div>
          <div class="col-lg-6">
            <ul>
              <li v-for="type in getTypes" :key="type.type.name">
                {{ type.type.name }}
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">Abilities:</div>
          <div class="col-lg-6">
            <ul>
              <li v-for="ability in getAbilities" :key="ability.ability.name">
                <button
                  class="btn btn-outline-primary"
                  @click="showSpecificInfo(ability.ability)"
                >
                  {{ ability.ability.name }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="text-center">Theres no pokemon...</h2>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["specific-info"],
  data() {
    return {
      activePokemon: null,
    };
  },
  computed: {
    getActivePokemon() {
      return this.$store.getters.getActivePokemon;
    },
    getPokemonName() {
      return this.activePokemon.name;
    },
    getAbilities() {
      return this.activePokemon.abilities;
    },
    getTypes() {
      return this.activePokemon.types;
    },
  },
  watch: {
    getActivePokemon(newValue) {
      this.activePokemon = newValue;
      console.log(this.activePokemon);
    },
  },
  methods: {
    setActivePokemon() {
      this.activePokemon = this.getActivePokemon;
    },
    showSpecificInfo(specific) {
      this.$store.dispatch("setSpecificInfo", specific);
    },
  },
  created() {
    this.setActivePokemon();
  },
};
</script>

<style lang="scss" scoped>
.btn-outline-primary {
  border: none;
}
</style>