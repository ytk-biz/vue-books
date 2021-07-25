<template>
  <div class="link-panel">
    <ul>
      <li v-for="item of items" :key="item">
        <router-link :to="`/${encodeURIComponent(item)}/1`">
          {{ item }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinkPanel",
  props: ["items"],
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.link-panel {
  background: $gray;
  padding: 36px;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: -24px 0 0 -24px;

    li {
      padding: 24px 0 0 24px;
      width: 50%;

      a {
        background: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px;
        text-align: center;
        transition: box-shadow 0.2s ease-in-out;

        @include hover {
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }
      }
    }
  }

  @include mq {
    padding: 24px;

    ul {
      display: block;
      margin: 0;

      li {
        padding: 0;
        width: 100%;

        + li {
          margin-top: 12px;
        }

        a {
          padding: 12px;
        }
      }
    }
  }
}
</style>
