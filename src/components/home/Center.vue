<template lang="html">
  <div>
    <h1 class='center'>The Fall</h1>
    <section class='top_section'>

      <div>
        <h3 class='center'><router-link class="nav-link" to="/about">About Me</router-link></h3>
        <p>Learn more about me and my journey with coding.</p>
      </div>

      <div>
        <h3 class='center'><router-link class="nav-link" to="/gallery">Gallery</router-link></h3>
        <p>Experience Some nice fall photo's simply sit back and relax as you click throw them.</p>
      </div>

    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  .top_section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 2px solid blue;
  }

</style>
