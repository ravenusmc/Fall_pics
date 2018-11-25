<template lang="html">
  <div>
    <!-- <Navbar></Navbar> -->
    <Header></Header>
    <Center></Center>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import Header from '../components/home/Header.vue';
  import Center from '../components/home/Center.vue';

  export default {
    components: {
      'Header': Header,
      'Center': Center
    }
  }
</script>

<style lang="css">
</style>
