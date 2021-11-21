import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:0
  },
  mutations: {
    increment(state){
      this.state.counter ++
    },
    decrement(state){
      this.state.counter --
    }
  },
  actions: {
  },
  modules: {
  }
})
