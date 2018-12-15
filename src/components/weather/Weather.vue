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
        <h2>Graph: {{ name }} {{ test }}</h2>
      </div>
      <button @click="getData">Click</button>
      <p>{{ weatherData }}</p>
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Weather',
    data() {
      return {
        name: this.$store.state.name,
        test: this.$store.state.test,
        weatherData: this.$store.state.weatherData
      }
    },
    methods: {
      ...mapActions([
        'getData'
      ]),
      retrieveData(){
        alert('tsda')
      }
    }
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
