<template>
  <div class="page-index">
    <h1
       class="page-index-title"
       @click="foo()"
      >UNDRGRND</h1>
    <h2
       class="page-index-desc"
    >A social network linking up ravers with the newest underground music
     events.
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'center-auth',
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  methods: {
    foo() {
      this.$store.dispatch('foo');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.page-index {
  align-items: center;
  color: $color-white;
  display: grid;
  font-family: $font-main;
  grid-template-rows: 2fr 1fr;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "desc desc";
  text-align: center;

  &-title {
    grid-area: title;
    font-size: 80px;
    @include breakpoint(mobile) {
      font-size: 40px;
    }
  }
  &-desc {
    grid-area: desc;
    font-size: 30px;
    max-width: 700px;
    word-wrap: break-word;
    @include breakpoint(mobile) {
      font-size: 20px;
      max-width: 300px;
    }
  }
}
</style>
