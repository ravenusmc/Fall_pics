import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from "d3";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Weather Data',
    yearData: [],
    tempData: [],
    count: 0
  },
  getters: {
    counter(state){
      return state.count
    }
  },
  mutations: {
    setYearData(state, data) {
      state.yearData = data
    },
    setTempData(state, data){
      state.tempData = data
    },
    increment(state, payload) {
      state.count += payload;
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
          console.log(yearData)
          commit('setYearData', yearData)
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
        })
    },
    increment(state, payload){
      state.commit('increment', payload)
    }
  }
})

































///
