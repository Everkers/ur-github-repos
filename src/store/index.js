import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popUp:false // about project pop up 
  },
  mutations: {
    showPopUp(state){
      state.popUp = !state.popUp // if pop up is true switch it to false and if it's flase turn it to true ..
    }
  },
  getters:{
    popUp(state){
      return state.popUp //get the current value of the popup 
    }
  }
})
