<template>
  <div class="navbar">
    <div v-if="user === null" class="navbar__links">
      <nuxt-link
        class="navbar__links-link navbar__links-link--one"
        to="/login"
      >Login</nuxt-link>
      <nuxt-link
        class="navbar__links-link navbar__links-link--two"
        to="/signup"
      >Sign Up</nuxt-link>
    </div>
    <div v-else class="navbar__links">
      <a
        class="navbar__links-link navbar__links-link--one"
        target="_blank"
        rel="noopener"
        @click="logout()"
      >Logout</a>
      <a
        class="navbar__links-link navbar__links-link--two"
        target="_blank"
        rel="noopener"
        @click="visitMyProfile()"
      >My Profile</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &__links {
    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
    grid-template-areas:
      ". one two";
    width: 100%;

    &-link {
      align-self: center;
      color: $color-white;
      border-bottom: solid 1px;
      padding: 5px;
      justify-self: center;

      &--one {
        grid-area: one;
      }
      &--two {
        grid-area: two;
      }
    }
  }
}
</style>
