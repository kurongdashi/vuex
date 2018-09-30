import Vue from 'vue';
import Vuex from 'vuex'

import state from './state'
import getters from './getter'
import actions from './action'
import mutations from './mutation'


import createLogger from 'vuex/dist/logger'
Vue.use(Vuex);
//生成一个store
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins:[createLogger()]
})
