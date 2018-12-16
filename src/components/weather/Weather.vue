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
      <p>{{ tempData }}</p>
      <!-- <h1>{{ count }}</h1> -->
      <!-- <button @click='pressed'>Pressed</button> -->
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import {mapState} from 'vuex'

  export default {
      name: 'Weather',
      data() {
        return { }
      },
    computed:{
       ...mapState({
          name: state=>state.name,
          yearData: state=>state.yearData,
          tempData: state=>state.tempData
       })
    },
    beforeMount(){
      this.$store.dispatch('getYearData')
      this.$store.dispatch('getTempData')
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
