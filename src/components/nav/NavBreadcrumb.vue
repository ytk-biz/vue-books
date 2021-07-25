<template>
  <nav class="nav-breadcrumb">
    <ol>
      <li><router-link :to="'/'" exact>ホーム</router-link></li>
      <li v-if="searchTitle && currentPage && $route.params.isbn">
        <router-link :to="`/${searchTitle}/${currentPage}`" exact>{{
          searchTitle
        }}</router-link>
      </li>
      <li v-if="currentPageTitle" aria-current="page">
        {{ currentPageTitle }}
      </li>
    </ol>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBreadcrumb",
  props: ["currentPageTitle"],
  computed: {
    ...mapGetters(["searchTitle", "currentPage"]),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.nav-breadcrumb {
  background: $DarkBlue02;
  margin: 0 -20px;
  padding: 0 20px;

  ol {
    display: flex;
    flex-wrap: wrap;
    max-width: $pc;
    margin: auto;
    padding: 8px 0;

    li {
      color: $white;
      font-size: 1.2rem;
      margin-right: 28px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        display: block;
        margin: auto;
        top: 0.5em;
        right: -16px;
        width: 7px;
        height: 7px;
        border-top: 2px solid $white;
        border-right: 2px solid $white;
        transform: rotate(45deg);
      }

      &:last-child {
        margin-right: 0;

        &::after {
          content: none;
        }
      }

      a {
        color: inherit;
      }
    }
  }

  @include mq {
    ol li {
      font-size: 1rem;
    }
  }
}
</style>
