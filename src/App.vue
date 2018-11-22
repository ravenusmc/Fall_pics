<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      'Navbar': Navbar,
      'Header': Header,
      'Footer': Footer
    }

  }
</script>

<style>

</style>
