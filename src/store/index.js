import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "title",
    userName: "",
    email: "",
    password: ""
  },
  mutations: {
    setTitle(state, value){
      state.title = value;
    },
    setuserName(state, value){
      state.userName = value;
    },
    setEmail(state, value){
      state.email = value;
    },
    setPassword(state, value){
      state.password = value;
    },
  },
  actions: {
    setTitle({ commit }, value) {
      console.log("value", value)
      commit('setTitle', value);
    },
    setuserName({ commit }, value) {
      commit('setuserName', value);
    },
    setEmail({ commit }, value) {
      commit('setEmail', value);
    },
    setPassword({ commit }, value) {
      commit('setPassword', value);
    },
  },
  getters: {
    getCurrentTitle: state => state.title
  },
  modules: {},
});
