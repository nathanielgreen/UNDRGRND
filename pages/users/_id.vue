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
  layout: 'default',
  async validate({ params }) {
    // eslint-disable-next-line
    return !isNaN(+params.id);
  },
  async asyncData({ store, params, error }) {
    const data = await store.dispatch('getUserProfile', params);
    if (data == null) {
      error({ message: 'User not found', statusCode: 404 });
    } else {
      store.commit('UPDATE_VIEWED_USER', data);
    }
  },
};
</script>
