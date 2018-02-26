<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  middleware: ['user'],
  components: { Navbar },
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  align-items: center;
  background: #121212;
  display: grid;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
