<template>
  <div>

    <div class='header'>
      <h1>Weather Page</h1>
      <p>Examine Weather Data Here</p>
      <p>Please select a year</p>
      <select>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
      </select>
    </div>

    <div>
      <h1 class='center'>Weather Data Graph Area</h1>
      <div>
        <h2>Graph</h2>
      </div>

    </div>

  </div>
</template>

<script>
  import * as d3 from "d3";

  //Console.log('Mike');

    d3.csv("../src/components/data/data.csv", function(data) {
      console.log(data.state);
    });

  export default {
    name: 'Weather'
  }

</script>

<style scoped>

  .center {
    text-align: center;
  }

  .header {
    margin-top: 50px;
    text-align: center;
  }

</style>
