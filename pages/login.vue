<template>
  <div class="page-login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
  layout: 'login',
};
</script>

<style lang="scss">
</style>
