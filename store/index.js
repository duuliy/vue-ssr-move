import Vue from 'vue'
import Vuex from 'vuex'
import test from './module/test'


let modules = {
  test
}
Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules
})

export default store

// export default new Vuex.Store({
//   modules
// })
