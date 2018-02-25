<template>
  <div class="user">
    {{ stuff }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuff: null,
    };
  },
  async validate({ params }) {
    // eslint-disable-next-line
    return !isNaN(+params.id);
  },
  async fetch({ store }) {
    const data = await store.dispatch('GET_A_USER');
    console.log(data);
    this.stuff = data;
    return data;
  },
};
</script>
