<template>
  <div>

    <header>
      <h1 class='center'>Local Weather Data</h1>
      <button class='search_pic_button' @click="showWeatherData">Get Weather</button>
    </header>

    <div class='Weather_Data' v-if="show">
      <h3>Here are the results: </h3>
      <h6>Local Temperature: {{ weatherData[0] }} F</h6>
      <h6>Local Humidity: {{ weatherData[1] }}</h6>
      <h6>Local Pressure: {{ weatherData[2] }}</h6>
      <h6>Local Conditions: {{ weatherData[3] }}</h6>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import { mapState, mapActions, mapGetters } from 'vuex';
  const delay = require('delay');

  const city = "atlanta";
  const url = "http://api.openweathermap.org/data/2.5/weather";


  export default {
    name: 'CurrentWeather',
    data() {
      return {
        show: false
      }
    },
    computed: {
        ...mapState({
          weatherData: state=>state.weatherAPIData,
       }),
       ...mapGetters([
         'getweatherAPIDATA'
       ])
    },//End of computed properties
    methods: { //Start of methods
      ...mapActions([
        'getAPIData'
      ]),
      showWeatherData() {
        this.$store.dispatch('getAPIData')
        delay(1000)
        this.show = true
        // this.weatherData = this.$store.state.weatherAPIData
        // return this.$store.getters.getweatherAPIDATA
      }
    }//End of Methods
  }

</script>

<style scoped>

  /* Generic CSS */
  .search_pic_button {
    margin-top: 10px;
    background-color: #3a5787;
    border: #3a5787;
    padding: 12px;
    border-radius: 12px;
    color: #d68419;
  }

  .search_pic_button:hover {
    background-color: #d68419;
    border: #d68419;
    color: #3a5787;
  }

  .center {
    text-align: center;
  }

  /* CSS for the main parts on the page */

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .Weather_Data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

</style>



































//
