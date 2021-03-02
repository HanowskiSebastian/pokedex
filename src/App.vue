<template>
  <the-header></the-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/template/TheHeader.vue";

export default {
  components: { TheHeader },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
