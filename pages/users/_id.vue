<template>
  <div class="user">
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getViewedUser',
    }),
  },
  layout: 'center-layout',
  async validate({ params }) {
    // eslint-disable-next-line
    return !isNaN(+params.id);
  },
  async asyncData({ store }) {
    const data = await store.dispatch('GET_A_USER');
    store.commit('updateViewedUser', data);
  },
};
</script>
