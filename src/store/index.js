import Vue from 'vue'
import vuex from 'vuex'
import user from './modules/user'
import system from './modules/system'
import createLogger from '../plugins/logger'
Vue.use(vuex);
const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  modules: {
     user,
    system
  },
  mutations:{

  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
