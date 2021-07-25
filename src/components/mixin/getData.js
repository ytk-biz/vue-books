import { mapGetters } from "vuex";
import { mapActions } from "vuex";

const getData = {
  computed: {
    ...mapGetters(["isCalling", "isLoading", "isMatching"]),
  },
  methods: {
    ...mapActions([
      "UpdateSearchTitle",
      "UpdateItems",
      "UpdateIsCalling",
      "UpdateIsLoading",
      "UpdateisMatching",
      "UpdateCurrentPage",
      "UpdatePageCount",
      "UpdateResultCount",
    ]),
    getData(addParams, hits = 1) {
      if (this.isLoading || this.isCalling) {
        alert("読み込み中です");
        return;
      }

      this.UpdateIsCalling(true);
      this.UpdateIsLoading(true);

      let reqURL = new URL(
        "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404"
      );
      let params = new URLSearchParams(
        "?" +
          "format=json&" +
          "formatVersion=2&" +
          "applicationId=1011145054221269416&" +
          "publisherName=%E9%9B%86%E8%8B%B1%E7%A4%BE&" +
          "size=9&" +
          "sort=-releaseDate&" +
          `hits=${hits}`
      );

      if (addParams) {
        for (const key of Object.keys(addParams)) {
          params.append(key, addParams[key]);

          switch (key) {
            case "title":
              this.UpdateSearchTitle(addParams[key]);
              break;
            case "page":
              this.UpdateCurrentPage(addParams[key]);
              break;
            default:
              break;
          }
        }
      }

      reqURL.search = params;

      setTimeout(() => {
        this.UpdateIsCalling(false);
      }, 1000);

      fetch(reqURL.toString())
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("error");
          }
        })
        .then((data) => {
          if (data.pageCount && data.Items.length) {
            this.UpdateItems(data.Items);
            this.UpdatePageCount(data.pageCount);
            this.UpdateResultCount(data.count);
            this.UpdateisMatching(true);
          } else {
            this.UpdateItems([]);
            this.UpdatePageCount(0);
            this.UpdateResultCount(0);
            this.UpdateisMatching(false);
          }

          this.UpdateIsLoading(false);
        })
        .catch(() => {
          this.UpdateItems([]);
          this.UpdatePageCount(0);
          this.UpdateResultCount(0);
          this.UpdateisMatching(false);
          this.UpdateIsLoading(false);
        });
    },
  },
};

export default getData;
