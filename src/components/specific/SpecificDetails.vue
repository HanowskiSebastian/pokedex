<template>
  <div>
    <header class="d-flex justify-content-between align-items-center">
      <h2 class="text-capitalize">{{ getSpecific.name }}</h2>
      <button class="btn btn-danger" @click="hideSpecific">X</button>
    </header>
    <section v-if="hasContent">
      <p v-if="!isLoading">
        {{ getAdditionalContent }}
      </p>
      <p v-else>Loading...</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { additionalContent: null, hasContent: false, isLoading: true };
  },

  computed: {
    getSpecific() {
      return this.$store.getters.getSpecificInfo;
    },
    getAdditionalContent() {
      return this.additionalContent.effect_entries[1].effect;
    },
  },
  methods: {
    hideSpecific() {
      this.$store.dispatch("hideSpecific");
    },
    getSpecificInfo(data) {
      this.isLoading = true;
      axios
        .get(`${data.url}`)
        .then((result) => {
          this.additionalContent = result.data;
          console.log(this.additionalContent);
          this.hasContent = true;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    getSpecific(newValue) {
      this.isLoading = true;
      this.getSpecificInfo(newValue);
      if (newValue === null) {
        this.hideSpecific();
      }
    },
  },
  created() {
    this.isLoading = true;
    this.getSpecificInfo(this.getSpecific);
  },
};
</script>