import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    user: null,
    authError: {
      show: false,
      msg: null,
    },
    viewedUser: null,
  },
  getters: {
    getUser: state => state.user,
    getAuthError: state => state.authError,
    getViewedUser: state => state.viewedUser,
  },
  mutations: {
    UPDATE_USER(state, value) {
      state.user = value;
    },
    UPDATE_AUTH_ERROR(state, value) {
      state.authError = value;
    },
    UPDATE_VIEWED_USER(state, value) {
      state.viewedUser = value;
    },
  },
  actions: {
  },
});

export default store;
