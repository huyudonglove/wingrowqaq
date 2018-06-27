import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  loginInfo:'',
}
const mutations={
  changeLogin(state,status){
    state.loginInfo=status
  },
  metest(){
    alert('123')
  },
  all(){
    alert('456')
  }
}
export default new vuex.Store({
  state,
  mutations,
})
