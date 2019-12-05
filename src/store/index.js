import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popUp:false
  },
  mutations: {
    showPopUp(state){
      state.popUp = !state.popUp
    }
  },
  getters:{
    popUp(state){
      return state.popUp
    }
  }
})
