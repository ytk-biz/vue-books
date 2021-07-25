<template>
  <div class="str-column-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StrColumn1",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.str-column-1 {
  @include reset-margin;
  max-width: $pc;
  margin: auto;
  padding: 36px 0 60px;
}
</style>
