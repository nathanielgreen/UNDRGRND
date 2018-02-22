<template>
  <div class="login-form">
    <div class="login-form__form">
      <input
        class="login-form__form-input"
        v-model="email"
        type="text"
        placeholder="Email"
      />
      <input
        class="login-form__form-input"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <button
        class="login-form__form-button"
        @click="signIn()"
      >Login</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

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
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
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
