import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  loginInfo:'',
}
export default new vuex.Store({
  state,
  mutations:{
    changeLogin(state,status){
      state.loginInfo=status
    }
  }
})
