<template>
  <div class="user">
    {{ user.username }}
    {{ user.email }}
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
  mounted() {
    this.$store.dispatch('GET_USER');
  },
  layout: 'center-layout',
};
</script>

