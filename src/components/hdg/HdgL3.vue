<template>
  <h2 class="hdg-l3"><slot></slot></h2>
</template>

<script>
export default {
  name: "HdgL3",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.hdg-l3 {
  color: $DarkBule;
  font-weight: bold;
  margin: 44px 0 24px;

  @include mq {
    margin: 32px 0 16px;
  }
}
</style>
