<template>
  <div class="login-form">
    <h2 class="login-form-title">Log In</h2>
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
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.login-form {
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  justify-content: center;

  &-title {
    font-family: $font-main;
    color: $color-white;
    text-decoration: underline;
  }
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
