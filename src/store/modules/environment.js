import environmentAPI from '../../api/environment'
//state
const state = {
  user:null
}
// getters
const getters = {

}
// actions
const actions = {
  init () {
    return new Promise((resolve, reject) => {
      environmentAPI.getEnvironment(
        user =>{
          if(user){
            resolve(user);
          }else{
            reject();
          }
        }
      )
    });
  }
}
// mutations
const mutations = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
