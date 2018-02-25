<template>
  <div class="user">
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
  },
  async asyncData({ params }) {
    try {
      const { data } = await this.$store.dispatch('GET_USER', params);
      return data;
    } catch (e) {
      console.log(e);
    }
    return null;
  },
};
</script>

