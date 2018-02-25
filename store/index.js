import Vuex from 'vuex';
import firebase from 'firebase';

const store = () => new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    getUser: state => state.user,
  },
  mutations: {
    updateUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    SIGN_IN(context, signInDetails) {
      firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
        .then((res) => {
          context.commit('updateUser', res);
          this.$router.replace('/');
        });
    },
    SIGN_UP(context, signUpDetails) {
      firebase.auth().createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
        .then((res) => {
          context.commit('updateUser', res);
          this.$router.replace('/');
        });
    },
  },
});

export default store;
