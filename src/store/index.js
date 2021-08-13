import { createStore } from "vuex";

export default createStore({
  state: {
    categoryMap: {},
  },
  mutations: {
    defineMap(state, categMap) {
      state.categoryMap = categMap;
    }
  },
  actions: {},
  modules: {},
});
