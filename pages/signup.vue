<template>
  <div class="page-signup">
    <signup-form
       class="page-signup__container"
    ></signup-form>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';

export default {
  name: 'PageSignup',
  components: { SignupForm },
  layout: 'center-form',
};
</script>

<style lang="scss" scoped>
.page-signup {
  height: 100%;
  width: 100%;
  background: #111111;
}
</style>
