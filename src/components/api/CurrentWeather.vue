<template>
  <div>

    <header>
      <h1 class='center'>Local Weather Data</h1>
      <!-- <button @click="getAPIData">Get Weather</button> -->
      <button @click="showWeatherData">Get Weather</button>
    </header>

    <div v-if="show">
      <h1>Hi</h1>
      <ul>
        <li v-for="t in test">{{ t }}</li>
      </ul>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import { mapState, mapActions } from 'vuex';

  const city = "atlanta";
  const url = "http://api.openweathermap.org/data/2.5/weather";


  export default {
    name: 'CurrentWeather',
    data() {
      return {
        show: false,
        test: []
      }
    },
    computed: {
        ...mapState({
          test: state=>state.weatherAPIData,
       })
    },
    methods: {
      ...mapActions([
        'getAPIData'
      ]),
      showWeatherData() {
        this.show = true
        this.getAPIData
      }
    }
    // created(){
    //   axios
    //     .get('http://localhost:3000/events')
    //     .then(response =>{
    //       this.events = response.data
    //     })
    //     .catch(error => {
    //       console.log('There was an error: ' + error.response)
    //     })
    // }
  }
</script>

<style scoped>

  .center {
    text-align: center;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
</style>



































//
