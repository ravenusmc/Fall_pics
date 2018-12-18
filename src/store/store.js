import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from "d3";
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Weather Data',
    yearData: [],
    tempData: [],
    localTemp: '',
    count: 0,
    data: {
         labels: [],
         series: [
             {
                 data: []
             }
     ]
   },
  },
  getters: {
  },
  mutations: {
    setYearData(state, data) {
      state.yearData = data
    },
    setTempData(state, data){
      state.tempData = data
    },
    setWeatherData(state, data){
      state.data.labels = data
    },
    setGraphTempData(state, data){
      state.data.series[0].data = data
    },
    setlocalTemp(state, data){
      state.localTemp = data
    }
  },
  actions: {
    getYearData: ({commit}) => {
      d3.csv("../src/components/data/alaska.csv")
        .then(function(data){
          console.log('fired!!!')
          let yearData = []
          for (let i = 0; i < data.length; i++){
            let day = data[i].AKST
            yearData.push(day)
          }
          commit('setYearData', yearData)
          commit('setWeatherData', yearData)
        })
    },
    getTempData: ({commit}) => {
      d3.csv("../src/components/data/alaska.csv")
        .then(function(data){
          let tempData = []
          for (let i = 0; i < data.length; i++){
            let day = data[i].MaxTemperatureF
            tempData.push(day)
          }
          commit('setTempData', tempData)
          commit('setGraphTempData', tempData)
        })
    },
    getAPIData: ({commit}) => {
      axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=496ab03bf1b4438b3b6c1dbf5673442f')
      .then(response =>{
           this.events = response.data
           let temp = this.events.main.temp;
           console.log(temp)
           commit('setlocalTemp', temp)
      })
      .catch(error => {
            console.log('There was an error: ' + error.response)
      })
    }
  }
})

































///
