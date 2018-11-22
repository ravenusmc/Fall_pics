<template lang="html">
  <div>
    <!-- <Navbar></Navbar> -->
    <Header></Header>
    <Center></Center>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  // import Navbar from '../components/home/Navbar.vue';
  import Header from '../components/home/Header.vue';
  import Center from '../components/home/Center.vue';
  // import Footer from '../components/home/Footer.vue';

  export default {
    components: {
      // 'Navbar': Navbar,
      'Header': Header,
      'Center': Center
      // 'Footer': Footer
    }
  }
</script>

<style lang="css">
</style>
