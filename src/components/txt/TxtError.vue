<template>
  <p class="txt-error">
    <strong><slot></slot></strong>
  </p>
</template>

<script>
export default {
  name: "TxtError",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.txt-error {
  color: $red;
  font-weight: bold;

  strong {
    color: inherit;
    font-weight: inherit;
  }
}
</style>
