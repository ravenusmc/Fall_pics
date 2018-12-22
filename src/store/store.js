import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from "d3";
import axios from 'axios'
import KEY from './key.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Weather Data',
    yearData: [],
    tempData: [],
    weatherAPIData: [],
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
    getweatherAPIDATA: state => {
      return state.weatherAPIData
    }
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
    setweatherAPIData(state, data){
      state.weatherAPIData = data
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
    getAPIData: ({commit, state}) => {
      axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=' + KEY.KEY)
      .then(response =>{
          //This array will hold all of the weather data
          const weatherData = []
          this.events = response.data
          let temp = this.events.main.temp;
          //Converting the temp to Kelvin
          temp = (temp - 273.15) * (9/5) + 32
          //Chopping off excess decimal points
          temp = temp.toFixed(2)
          //Pushing the temp into the weatherData array
          weatherData.push(temp)
          //Getting the humidity
          let humidity = this.events.main.humidity;
          weatherData.push(humidity)
          //Getting the pressure
          let pressure = this.events.main.pressure;
          weatherData.push(pressure)
          //Getting the description of the weather.
          let weatherDescription = this.events.weather[0].main
          weatherData.push(weatherDescription)
          commit('setweatherAPIData', weatherData)
      })
      .catch(error => {
            console.log('There was an error: ' + error.response)
      })
    }
  }
})

































///
