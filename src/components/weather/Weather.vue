<template>
  <div>

    <div class='header'>
      <h1>Weather Page</h1>
      <p>Examine Weather Data Here</p>
    </div>

    <div>
      <h1 class='center'>Weather Data Graph Area</h1>
      <div class='graph_area'>
        <VueChartist
          type="Line"
          :data="data"
          :options="options" >
        </VueChartist>
      </div>

      <!-- <p>{{ yearData }}</p>
      <p>{{ tempData }}</p>
      <p>{{ data.labels }}</p>
      <p>{{ data.series[0].data }}</p> -->
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapState } from 'vuex';
  import VueChartist from 'v-chartist'

  export default {
      name: 'Weather',
      components: {
        'VueChartist': VueChartist
      },
      data() {
        return {
          options: {
                   width: 1200,
                   height: 1000
               },
        }
      },
      computed:{
        ...mapState({
          name: state=>state.name,
          yearData: state=>state.yearData,
          tempData: state=>state.tempData,
          data: state=>state.data,
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

  .graph_area {
    display: flex;
    flex-direction: center;
    justify-content: center;
  }

  .ct-series-a .ct-line {
  /* Set the colour of this series line */
  stroke: blue;
  /* Control the thikness of your lines */
  stroke-width: 3px;
  /* Create a dashed line with a pattern */
  stroke-dasharray: 10px 20px;
}

</style>
