<template>
  <div class="page-login">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'PageLogin',
  components: { LoginForm },
  layout: 'center-auth',
};
</script>
