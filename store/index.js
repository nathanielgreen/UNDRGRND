import Vuex from 'vuex';
import gql from 'graphql-tag';

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
    async signUp(context, data) {
      const client = await this.app.apolloProvider.defaultClient;
      await client.mutate({
        mutation: gql`
          mutation signUp(
            $email: String!
            $password: String!
            $name: String!
          ) {
            signup(
              email: $email
              password: $password
              name: $name
            ) {
              token
              user {
                id
                name
                email 
              }
            }
          }
        `,
        variables: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      }).then((res) => {
        context.commit('UPDATE_USER', res.data.signup.user);
      }).catch((err) => {
        console.log(err);
      });
    },
    async signIn(context, data) {
      const client = await this.app.apolloProvider.defaultClient;
      await client.mutate({
        mutation: gql`
          mutation login(
            $email: String!
            $password: String!
          ) {
            login(
              email: $email
              password: $password
            ) {
              token
              user {
                id
                name
                email 
              }
            }
          }
        `,
        variables: {
          email: data.email,
          password: data.password,
        },
      }).then((res) => {
        context.commit('UPDATE_USER', res.data.login.user);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
});

export default store;
