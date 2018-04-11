import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'undrgrnd-data',
    paths: [],
  })(store);
};
