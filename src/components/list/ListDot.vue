<template>
  <ul class="list-dot">
    <li v-for="item of items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "ListDot",
  props: ["items"],
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.list-dot {
  margin-bottom: 32px;

  > li {
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0.6em;
      left: 0;
      width: 4px;
      height: 4px;
      background: $black;
      border-radius: 50%;
    }

    + li {
      margin-top: 8px;
    }
  }
}
</style>
