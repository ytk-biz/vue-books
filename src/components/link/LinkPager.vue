<template>
  <div class="link-pager" v-if="!isLoading && isMatching && 1 < pageCountNum">
    <ul class="list-wrap">
      <li v-if="1 < currentPageNum">
        <router-link :to="`/${searchTitle}/${currentPageNum - 1}`" exact
          >前へ</router-link
        >
      </li>
      <li v-for="i of pagerList.length" :key="i">
        <router-link
          :to="`/${searchTitle}/${pagerList[i - 1]}`"
          exact
          aria-current-value="true"
        >
          {{ pagerList[i - 1] }}
        </router-link>
      </li>
      <li v-if="currentPageNum < pageCountNum">
        <router-link :to="`/${searchTitle}/${currentPageNum + 1}`" exact
          >次へ</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LinkPager",
  computed: {
    ...mapGetters([
      "searchTitle",
      "isLoading",
      "isMatching",
      "currentPage",
      "pageCount",
    ]),
    currentPageNum() {
      return Number(this.currentPage);
    },
    pageCountNum() {
      return Number(this.pageCount);
    },
    pagerList() {
      let pagerList = [];
      let i = 0;
      let add = 0;

      if (this.pageCountNum < 4) {
        for (i; i < this.pageCountNum; i++) {
          pagerList[i] = i + 1;
        }
      }

      if (4 < this.pageCountNum) {
        if (3 < this.currentPageNum) {
          if (this.pageCountNum - 2 < this.currentPageNum) {
            add = -4;

            for (i; i < 5; i++) {
              pagerList[i] = this.pageCountNum + add;
              add++;
            }
          } else {
            add = -2;

            for (i; i < 5; i++) {
              pagerList[i] = this.currentPageNum + add;
              add++;
            }
          }
        } else {
          for (i; i < 5; i++) {
            pagerList[i] = i + 1;
          }
        }
      }

      return pagerList;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.link-pager {
  margin-bottom: 52px;

  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -12px 0 0 -12px;

    li {
      padding: 12px 0 0 12px;

      a {
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
        border: 1px solid $DarkGray;
        border-color: #adb1b8 #a2a6ac #8d9096;
        background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
        color: $black;
        display: inline-block;
        padding: 8px 12px 7px 13px;
        text-align: center;
        transition: opacity 0.2s ease-in-out;

        &:hover {
          opacity: 0.5;
          text-decoration: none;
        }

        &.router-link-exact-active {
          background: $white;
          border-color: $orange;
          color: $orange;
        }
      }
    }
  }
}
</style>
