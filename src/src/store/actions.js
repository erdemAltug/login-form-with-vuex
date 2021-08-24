export default {
  setTitle({ commit }, value) {
    commit('setTitle', value);
  },
  deleteTitle({commit}, value){
    commit('deleteTitle',value)
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
}