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
      class="page-index-link page-index-link--login"
      to="/login"
    >Login</nuxt-link>
    <nuxt-link
      class="page-index-link page-index-link--signup"
      to="/login"
    >Sign Up</nuxt-link>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.page-index {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "desc desc"
    "login signup";
  text-align: center;
  &-title {
    grid-area: title;
  }
  &-desc {
    grid-area: desc;
  }
}
</style>
