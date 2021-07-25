<template>
  <div>
    <NavBreadcrumb v-if="isMatching" :current-page-title="searchTitle" />
    <StrColumn1>
      <HdgL2>検索タイトル {{ searchTitle }}</HdgL2>
      <LinkBooks />
      <LinkPager />
    </StrColumn1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBreadcrumb from "@/components/nav/NavBreadcrumb";
import StrColumn1 from "@/components/str/StrColumn1";
import HdgL2 from "@/components/hdg/HdgL2";
import LinkBooks from "@/components/link/LinkBooks";
import LinkPager from "@/components/link/LinkPager";

export default {
  name: "Books",
  components: {
    NavBreadcrumb,
    StrColumn1,
    HdgL2,
    LinkBooks,
    LinkPager,
  },
  computed: {
    ...mapGetters(["searchTitle", "isMatching"]),
  },
};
</script>
