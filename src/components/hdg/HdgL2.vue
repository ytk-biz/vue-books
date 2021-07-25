<template>
  <h2 class="hdg-l2"><slot></slot></h2>
</template>

<script>
export default {
  name: "HdgL2",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.hdg-l2 {
  background: $orange;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  color: $white;
  font-weight: bold;
  font-size: 1.6rem;
  margin: 64px 0 32px;
  padding: 4px 10px;

  .title {
    padding-left: 2.5em;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0.6em;
      left: 12px;
      width: 1em;
      height: 1px;
      background: $white;
    }
  }

  @include mq {
    margin: 40px 0 24px;
  }
}
</style>
