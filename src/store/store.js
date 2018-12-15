import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from "d3";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Weather Data',
    test: 'Test',
    weatherData: []
  },
  getters: {

  },
  mutations: {
    settingData: (state, data) => {
      state.weatherData = data
      return state.weatherData
    }
  },
  actions: {
    getData: ({commit}) => {
      d3.csv("../src/components/data/data.csv")
        .then(function(data){
          console.log(data)
          commit('settingData', data)
        })
    }
  }

})

































///
