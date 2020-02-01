import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentValue: ''
  },
  mutations: {
    setCurrentRoute(state, payload) {
      state.currentValue = payload;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
