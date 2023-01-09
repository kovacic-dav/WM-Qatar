<template>
  <div id="app">
    <Home />
    <Container />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Container from './components/Container.vue';

export default {
  name: 'App',
  components: {
    Home,
    Container,
  },
};
</script>

<style></style>
