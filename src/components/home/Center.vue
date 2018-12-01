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

    <section class='middle_section'>

      <div class='pic_one'>
      </div>

      <div>
      </div>

      <div class='pic_two'>
      </div>

      <div>
      </div>

      <div class='pic_three'>
      </div>

      <div>
      </div>

      <div class='pic_four'>
      </div>

      <div>
      </div>

      <div class='pic_five'>
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
  }

  .middle_section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .middle_section div {
    height: 400px
  }

  /* CSS for the pictures */
  .pic_one {
    background-image: url('../../assets/img/leaves1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pic_two {
    background-image: url('../../assets/img/leaves2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pic_three {
    background-image: url('../../assets/img/leaves3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pic_four {
    background-image: url('../../assets/img/leaves4.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .pic_five {
    background-image: url('../../assets/img/leaves5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
