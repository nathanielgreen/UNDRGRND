<template>
  <div class="login">
    <div class="login__form">
      <input
        class="login__form-input"
        type="text"
        placeholder="Email"
      />
      <input
        class="login__form-input"
        type="password"
        placeholder="Password"
      />
      <button
        class="login__form-button"
        @click="signIn()"
      >Login</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$router.replace('/');
    },
  },
  layout: 'login',
};
</script>

<style lang="scss">
.login {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;

  &__form {
    display: flex;
    flex-direction: column;
  }
}
</style>
