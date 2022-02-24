<template>
  <the-header title="Demo"></the-header>
  <res-list></res-list>
</template>

<script>
import ResList from './components/ResList.vue';
import TheHeader from './components/UI/Header.vue';

export default {
  components: {
    TheHeader,
    ResList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
