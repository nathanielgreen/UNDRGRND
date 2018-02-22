import Vuex from 'vuex';
import firebase from 'firebase';

const store = () => new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    SIGN_IN(context, signInDetails) {
      firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
        .then(() => {
          this.$router.replace('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export default store;
