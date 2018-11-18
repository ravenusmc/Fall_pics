<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      'Navbar': Navbar,
      'Header': Header
    }

  }
</script>

<style>

</style>
