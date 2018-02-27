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
    foo() {
      const graphqlClient = this.app.apolloProvider.defaultClient;
      graphqlClient.query({
        query: gql`
          query FeedQuery {
            feed {
              links {
                id
                createdAt
                url
                description
              }
            }
          }
        `,
      }).then((res) => {
        console.log(res.data.feed);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
});

export default store;
