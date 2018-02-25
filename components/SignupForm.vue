<template>
  <div class="signup-form">
    <input
      class="signup-form-input"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="signup-form-input"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <input
      class="signup-form-input"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <button
      class="signup-form-button"
      type="button"
      @click="signUp()"
    >Sign Up</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      const signUpDetails = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('SIGN_UP', signUpDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.signup-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  justify-content: center;

  &-input {
    background: #121212;
    border: solid 1px $color-white;
    color: $color-white;
    font-size: 14px;
    padding: 12px;
    width: 250px;
  }
  &-button {
    background: #121212;
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
