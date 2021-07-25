<template>
  <div>
    <NavBreadcrumb v-if="isMatching" :current-page-title="items[0].title" />
    <StrColumn1>
      <ImgLoading v-if="isLoading" />

      <LytDetail
        :img-src="items[0].largeImageUrl"
        :rktn-link="items[0].itemUrl"
        v-if="!isLoading && isMatching"
      >
        <template #title v-if="items[0].title">{{ items[0].title }}</template>
        <template #author v-if="items[0].author">{{
          items[0].author
        }}</template>
        <template #price v-if="items[0].itemPrice">{{
          items[0].itemPrice
        }}</template>
        <template #shipping v-if="items[0].postageFlag">{{
          shipping
        }}</template>
        <template #stock v-if="items[0].availability">{{ stock }}</template>
      </LytDetail>

      <TxtError v-if="!isLoading && !isMatching"
        >該当するコミックが見つかりませんでした。</TxtError
      >
    </StrColumn1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBreadcrumb from "@/components/nav/NavBreadcrumb";
import StrColumn1 from "@/components/str/StrColumn1";
import ImgLoading from "@/components/img/ImgLoading";
import LytDetail from "@/components/lyt/LytDetail";
import TxtError from "@/components/txt/TxtError";
import getData from "@/components/mixin/getData";

export default {
  name: "Detail",
  components: {
    NavBreadcrumb,
    StrColumn1,
    ImgLoading,
    LytDetail,
    TxtError,
  },
  mixins: [getData],
  computed: {
    ...mapGetters(["items", "isLoading", "isMatching"]),
    shipping() {
      let result;

      switch (Number(this.items[0].postageFlag)) {
        case 0:
          result = "送料別";
          break;
        case 1:
          result = "宅配送料無料";
          break;
        case 2:
          result = "送料無料";
          break;
        default:
          result = "要確認";
          break;
      }

      return result;
    },
    stock() {
      let result;

      switch (Number(this.items[0].availability)) {
        case 1:
          result = "在庫あり";
          break;
        case 2:
          result = "通常3～7日程度で発送";
          break;
        case 3:
          result = "通常3～9日程度で発送";
          break;
        case 4:
          result = "メーカー取り寄せ";
          break;
        case 5:
          result = "予約受付中";
          break;
        case 6:
          result = "メーカーに在庫確認";
          break;
        default:
          result = "要確認";
          break;
      }

      return result;
    },
  },
  created() {
    this.getData({
      isbn: this.$route.params.isbn,
    });
  },
};
</script>

<style></style>
