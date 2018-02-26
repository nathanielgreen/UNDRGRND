import Vuex from 'vuex';
import firebase from 'firebase';

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
    async getUserProfile(context, params) {
      const data = await firebase.database().ref(`users/${params.id}`);
      let newData;
      data.on('value', (snapshot) => {
        newData = snapshot.val();
      });
      console.log(newData);
      return newData;
    },
    addUserToUsersRef(context, user) {
      const usersRef = firebase.database().ref('users');
      const newUserKey = user.uid;
      const newUser = {
        username: user.username,
        email: user.email,
        id: user.uid,
      };
      const updates = {};
      updates[newUserKey] = newUser;
      usersRef.update(updates);
    },
    signInWithFirebase(context, signInDetails) {
      firebase.auth().signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
        .then((res) => {
          context.commit('UPDATE_USER', res);
          this.$router.replace('/');
        })
        .catch((err) => {
          context.commit('UPDATE_AUTH_ERRO', err);
        });
    },
    signUpWithFirebase(context, signUpDetails) {
      firebase.auth().createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
        .then((res) => {
          const user = {
            username: signUpDetails.username,
            email: res.email,
            uid: res.uid,
          };
          context.dispatch('addUserToUsersRef', user);
          context.commit('UPDATE_USER', res);
          this.$router.replace('/');
        })
        .catch((err) => {
          context.commit('UPDATE_AUTH_ERROR', err);
        });
    },
    signOutWithFirebase(context) {
      firebase.auth().signOut()
        .then(() => {
          context.commit('UPDATE_USER', null);
          this.$router.replace('/');
        });
    },
  },
});

export default store;
