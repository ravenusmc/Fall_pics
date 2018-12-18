<template>
  <div>
    <h1>Hello</h1>
    <button @click="getAPIData">Get Weather</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';

  const city = "atlanta";
  const url = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "496ab03bf1b4438b3b6c1dbf5673442f";
  const getString = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=496ab03bf1b4438b3b6c1dbf5673442f"

  export default {
    name: 'CurrentWeather',
    methods: {
      ...mapActions([
        'getAPIData'
      ])
    },
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
</style>



































//
