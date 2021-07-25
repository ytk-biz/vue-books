import { createStore } from "vuex";

export default createStore({
  state: {
    searchTitle: "",
    items: [],
    isCalling: false,
    isLoading: false,
    isMatching: false,
    currentPage: 0,
    resultCount: 0,
    pageCount: 0,
  },
  getters: {
    searchTitle: (state) => state.searchTitle,
    items: (state) => state.items,
    isCalling: (state) => state.isCalling,
    isLoading: (state) => state.isLoading,
    isMatching: (state) => state.isMatching,
    currentPage: (state) => state.currentPage,
    resultCount: (state) => state.resultCount,
    pageCount: (state) => state.pageCount,
  },
  mutations: {
    UpdateSearchTitle(state, val) {
      state.searchTitle = val;
    },
    UpdateItems(state, arr) {
      state.items = arr;
    },
    UpdateIsCalling(state, bool) {
      state.isCalling = bool;
    },
    UpdateIsLoading(state, bool) {
      state.isLoading = bool;
    },
    UpdateisMatching(state, bool) {
      state.isMatching = bool;
    },
    UpdateCurrentPage(state, num) {
      state.currentPage = num;
    },
    UpdateResultCount(state, num) {
      state.resultCount = num;
    },
    UpdatePageCount(state, num) {
      state.pageCount = num;
    },
  },
  actions: {
    UpdateSearchTitle({ commit }, val) {
      commit("UpdateSearchTitle", val);
    },
    UpdateItems({ commit }, arr) {
      commit("UpdateItems", arr);
    },
    UpdateIsCalling({ commit }, bool) {
      commit("UpdateIsCalling", bool);
    },
    UpdateIsLoading({ commit }, bool) {
      commit("UpdateIsLoading", bool);
    },
    UpdateisMatching({ commit }, bool) {
      commit("UpdateisMatching", bool);
    },
    UpdateCurrentPage({ commit }, num) {
      commit("UpdateCurrentPage", num);
    },
    UpdateResultCount({ commit }, num) {
      commit("UpdateResultCount", num);
    },
    UpdatePageCount({ commit }, num) {
      commit("UpdatePageCount", num);
    },
  },
});
