<template>
  <div>
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';

export default {
  name: 'PageSignup',
  components: { SignupForm },
  layout: 'center-auth',
};
</script>
