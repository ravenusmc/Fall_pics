<template lang="html">
  <div>
    <h1 class='heading center'>The Season of Fall</h1>
    <section class='top_section'>

      <div class='top_section_div'>
        <h3 class='center'><router-link class="nav-link" to="/about">About Me</router-link></h3>
        <p class='center'>Learn more about me and my journey with coding.</p>
      </div>

      <div class='top_section_div'>
        <h3 class='center'><router-link class="nav-link" to="/gallery">Gallery</router-link></h3>
        <p class='center'>Experience Some nice fall photo's simply sit back and relax as you click throw them.</p>
      </div>

    </section>

    <section class='middle_section'>

      <div class='pic_one'>
      </div>

      <div>
        <p>Life starts all over again when it gets crisp in the fall.</p>
      </div>

      <div class='pic_two'>
      </div>

      <div>
        <p>Every leaf speaks bliss to me, fluttering from the autumn tree.</p>
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

  .center {
    text-align: center;
  }

  .heading {
    margin-top: 25px;
  }

  .top_section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .top_section_div {
    border-radius: 50px;
    border: 2px solid black;
    margin: 20px;
  }

  .middle_section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-top: 1px dashed black;
  }

  .middle_section div {
    height: 400px;
    border: 1px dashed black;
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
