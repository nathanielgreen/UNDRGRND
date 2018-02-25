<template>
  <div>
    <v-dialog/>
    <nuxt/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      authError: 'getAuthError',
    }),
  },
  watch: {
    authError() {
      this.$modal.show('dialog', {
        title: this.authError.code,
        text: this.authError.message,
      });
    },
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  align-items: center;
  background: #121212;
  display: grid;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
