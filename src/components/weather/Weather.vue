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
        <h2>Graph: {{ name }}</h2>
      </div>
      <!-- <button @click="getYearData">Click</button> -->
      <p>{{ yearData }}</p>
      <h1>asdad{{ count }}</h1>
      <button @click='pressed'>Pressed</button>
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
        yearData: []
        // weatherData: this.$store.state.yearData
      }
    },
    methods: {
      // ...mapActions([
      //   'getYearData'
      // ]),
      pressed() {
        this.$store.dispatch('increment', 10)
      }
    },
    computed: {
      count(){
        return this.$store.getters.counter
      }
    },
    created(){
      this.$store.dispatch('getYearData')
      this.yearData = this.$store.state.yearData
    }
    // beforeMount(){
    //   //this.$store.dispatch('getYearData')
    // },
    // created() {
    //   this.$stote.dispath('increment', 10)
    // }
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
