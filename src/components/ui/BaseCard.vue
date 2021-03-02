<template>
  <div class="pokecard">
    <div class="outer" :class="[mode.position]">
      <div class="inner" :class="[mode.position]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: Object,
      required: false,
      default() {
        return { position: "top left" };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$border-value: "12px solid";
$directions: "top", "left", "bottom", "right";
@mixin borders($color, $position) {
  &.#{$position} {
    border-#{$position}: #{$border-value + " " + $color};
    border-radius: 6px;
    padding: 0.5rem;
    height: 100%;
  }
}
.pokecard {
  .outer {
    @each $direct in $directions {
      @include borders("red", $direct);
    }
  }
  .inner {
    @each $direct in $directions {
      @include borders("blue", $direct);
    }
  }
}
</style>