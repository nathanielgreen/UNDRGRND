<template>
  <div class="login-form">
    <input
      class="login-form-input"
      v-model="email"
      type="text"
      placeholder="Email"
    />
    <input
      class="login-form-input"
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <button
      class="login-form-button"
      type="button"
      @click="signIn()"
    >Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapActions([
      'SIGN_IN',
    ]),
  },
  methods: {
    signIn() {
      const signInDetails = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('SIGN_IN', signInDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.login-form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  justify-content: center;

  &-input {
    background: $color-black;
    border: solid 1px $color-white;
    color: $color-white;
    font-size: 14px;
    padding: 12px;
    width: 250px;
  }
  &-button {
    background: $color-black;
    border: solid 2px $color-white;
    border-bottom: solid 5px $color-white;
    color: $color-white;
    justify-self: center;
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
