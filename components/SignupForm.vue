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
      v-model="Password"
    />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.signup-form {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
