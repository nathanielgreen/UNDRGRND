<template>
  <h1>Logging Out...</h1>
</template>

<script>
export default {
  layout: 'center-layout',
  mounted() {
    this.$store.dispatch('SIGN_OUT');
  },
};
</script>
