import firebase from 'firebase';

export default function ({ store }) {
  const user = firebase.auth().currentUser;
  console.log(true);
  if (user !== null) {
    store.commit('updateUser', user);
  }
}
