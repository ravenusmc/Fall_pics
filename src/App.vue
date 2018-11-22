<template>
  <div id="app">
    <Navbar></Navbar>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './components/support/Navbar.vue';
  import Footer from './components/support/Footer.vue';

  export default {
    components: {
      'Navbar': Navbar,
      'Footer': Footer
    }
  }

</script>

<style>

</style>
