<template>
  <span class="img-blank">別タブで開きます</span>
</template>

<script>
export default {
  name: "ImgBlank",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.img-blank {
  margin: 0 0.5em;
  display: inline-block;
  width: 12px;
  height: 12px;
  position: relative;
  top: 0.1em;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
  }

  &::before {
    bottom: 0;
    left: 0;
    border: 1px solid $black;
  }

  &::after {
    top: 0;
    right: 0;
    border-top: 1px solid $black;
    border-right: 1px solid $black;
  }
}
</style>
