import Vuex from 'vuex';
import firebase from 'firebase';

const store = () => new Vuex.Store({
  state: {
    user: null,
    authError: {
      show: false,
      msg: null,
    },
  },
  getters: {
    getUser: state => state.user,
    getAuthError: state => state.authError,
  },
  mutations: {
    updateUser(state, value) {
      state.user = value;
    },
    updateAuthError(state, value) {
      state.authError = value;
    },
  },
  actions: {
    SIGN_IN(context, signInDetails) {
      firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
        .then((res) => {
          context.commit('updateUser', res);
          this.$router.replace('/');
        })
        .catch((err) => {
          context.commit('updateAuthError', err);
        });
    },
    SIGN_UP(context, signUpDetails) {
      firebase.auth().createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
        .then((res) => {
          context.commit('updateUser', res);
          this.$router.replace('/');
        })
        .catch((err) => {
          context.commit('updateAuthError', err);
        });
    },
  },
});

export default store;
