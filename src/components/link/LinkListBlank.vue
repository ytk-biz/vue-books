<template>
  <ul class="link-list-blank">
    <li v-for="item of items" :key="item">
      <a :href="item.url" target="_blank">{{ item.txt }}<ImgBlank /></a>
    </li>
  </ul>
</template>

<script>
import ImgBlank from "@/components/img/ImgBlank";

export default {
  name: "LinkListBlank",
  props: ["items"],
  components: {
    ImgBlank,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.link-list-blank {
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
      border: 1px solid $black;
      border-radius: 50%;
    }

    + li {
      margin-top: 8px;
    }
  }
}
</style>
