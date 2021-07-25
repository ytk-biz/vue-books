<template>
  <StrColumn1>
    <HdgL2>注目のタイトル</HdgL2>
    <LinkPanel
      :items="[
        'ONE PIECE',
        '鬼滅の刃',
        '僕のヒーローアカデミア',
        '呪術廻戦',
        'ハイキュー!!',
        'BLEACH',
      ]"
    ></LinkPanel>

    <HdgL2>このアプリの主な仕様</HdgL2>
    <HdgL3>主な使用技術</HdgL3>
    <LinkListBlank
      :items="[
        {
          txt: 'Vue',
          url: 'https://jp.vuejs.org/index.html',
        },
        {
          txt: 'Vue Router',
          url: 'https://router.vuejs.org/ja/',
        },
        {
          txt: 'Vuex',
          url: 'https://vuex.vuejs.org/ja/',
        },
        {
          txt: 'Vue CLI',
          url: 'https://cli.vuejs.org/',
        },
        {
          txt: '楽天ブックス書籍検索API',
          url: 'https://webservice.rakuten.co.jp/api/booksbooksearch/',
        },
      ]"
    ></LinkListBlank>
    <HdgL3>主な仕様</HdgL3>
    <ListDot
      :items="[
        '検索フォームを送信するとURLを更新します',
        '表示URLに応じてAPIへリクエストするURLを生成し、一覧ページ・詳細ページのデータを取得・表示します',
        '立て続けにコールするとアラートを表示します',
        '取得データに応じてページャーを生成します',
        '非同期処理の状態、該当データの有無などをVuexで管理します',
      ]"
    ></ListDot>
  </StrColumn1>
</template>

<script>
import StrColumn1 from "@/components/str/StrColumn1";
import HdgL2 from "@/components/hdg/HdgL2";
import HdgL3 from "@/components/hdg/HdgL3";
import LinkPanel from "@/components/link/LinkPanel";
import LinkListBlank from "@/components/link/LinkListBlank";
import ListDot from "@/components/list/ListDot";

export default {
  name: "Home",
  components: {
    StrColumn1,
    HdgL2,
    HdgL3,
    LinkPanel,
    LinkListBlank,
    ListDot,
  },
};
</script>
