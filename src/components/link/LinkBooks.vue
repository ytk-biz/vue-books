<template>
  <div class="link-books">
    <ImgLoading v-if="isLoading" />

    <template v-if="!isLoading && isMatching">
      <p class="result">
        検索結果 <em>{{ resultCount }}</em> 件
      </p>

      <ul class="list-wrap">
        <li v-for="item of items" :key="item.isbn">
          <router-link :to="`/detail/${encodeURIComponent(item.isbn)}`">
            <span class="img" v-if="item.largeImageUrl"
              ><img :src="item.largeImageUrl" alt=""
            /></span>
            <span class="title" v-if="item.title">{{ item.title }}</span>
            <span class="price" v-if="item.itemPrice"
              >{{ item.itemPrice }}<span class="unit">円（税込）</span></span
            >
          </router-link>
        </li>
      </ul>
    </template>

    <TxtError v-if="!isLoading && !isMatching"
      >該当するコミックが見つかりませんでした。</TxtError
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImgLoading from "@/components/img/ImgLoading";
import TxtError from "@/components/txt/TxtError";
import getData from "@/components/mixin/getData";

export default {
  name: "LinkBooks",
  components: {
    ImgLoading,
    TxtError,
  },
  mixins: [getData],
  computed: {
    ...mapGetters(["items", "isLoading", "isMatching", "resultCount"]),
  },
  methods: {
    createList() {
      if (this.$route.params.title && this.$route.params.page) {
        this.getData(
          {
            title: this.$route.params.title,
            page: this.$route.params.page,
          },
          25
        );
      }
    },
  },
  watch: {
    $route() {
      this.createList();
    },
  },
  created() {
    this.createList();
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.link-books {
  margin-bottom: 52px;

  .result {
    margin-bottom: 24px;
    text-align: right;
  }

  > .list-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: -40px 0 0 -40px;

    li {
      padding: 40px 0 0 40px;
      width: 20%;

      a {
        background: $white;
        color: $black;
        display: block;
        font-size: 1.3rem;
        height: 100%;
        padding: 16px;

        transition: box-shadow 0.2s ease-in-out;

        @include hover {
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }

        .img {
          display: block;
          margin-bottom: 12px;
          padding-top: 151%;
          position: relative;
          text-align: center;

          img {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            object-fit: contain;
            height: 100%;
            width: 100%;
          }
        }

        .title {
          display: -webkit-box;
          display: box;
          margin-bottom: 4px;
          overflow: hidden;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          box-orient: vertical;
        }

        .price {
          color: $red;
          display: block;

          .unit {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @include mq {
    margin-bottom: 40px;

    > .list-wrap {
      margin: -20px 0 0 -20px;

      li {
        padding: 20px 0 0 20px;
        width: 50%;

        a {
          padding: 12px;

          .img {
            margin-bottom: 4px;
          }

          .title {
            margin-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>
