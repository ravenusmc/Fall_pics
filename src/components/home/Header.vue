<template>
  <div class='header_div'>
    <div class='header_box'>
      <h1 class='center'>The Fall</h1>
      <hr>
      <h3>Pictures to bring calmness</h3>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .header_div {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/img/fall_header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .header_box {
    border: 2px solid black;
    padding: 10px;
    border-radius: 12px;
    background-color: rgba(255, 0, 0, 0.4);
  }

  .center {
    text-align: center;
  }



</style>
