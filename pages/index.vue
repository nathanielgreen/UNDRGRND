<template>
  <div class="page-index">
    <h1
       class="page-index-title"
      >UNDRGRND</h1>
    <h2
       class="page-index-desc"
    >A social network linking up ravers with the newest underground music
     events.
    </h2>
    <nuxt-link
      class="page-index-link"
      v-if="!user"
      to="/login"
    >Login</nuxt-link>
    <nuxt-link
      class="page-index-link"
      v-if="!user"
      to="/signup"
    >Sign Up</nuxt-link>
    <nuxt-link
      class="page-index-link"
      v-else
      to="/Logout"
    >Logout</nuxt-link>
      {{ viewedUser }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'center-layout',
  mounted() {
    this.$store.dispatch('GET_USER', 'hello');
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      viewedUser: 'getViewedUser',
    }),
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
  grid-template-rows: 2fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "desc desc"
    "login signup";
  text-align: center;

  &-title {
    grid-area: title;
    font-size: 80px;
  }
  &-desc {
    grid-area: desc;
    font-size: 30px;
    max-width: 700px;
    word-wrap: break-word;
  }
  &-link {
    background: $color-black;
    border: solid 2px $color-white;
    border-bottom: solid 5px $color-white;
    color: $color-white;
    justify-self: center;
    vertical-align: middle;
    padding: 12px;
    width: 150px;

    &:active {
      border-bottom: solid 2px $color-grey;
      border-color: $color-grey;
      color: $color-grey;
      padding-bottom: 15px;
    }
  }
}
</style>
