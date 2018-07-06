import environmentAPI from '../../api/environment'
//state
const state = {
  data1:[]
}
// getters
const getters = {

}
// actions
const actions = {
  init ({commit}) {
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
    })
  },
  detailinit(){
    return new Promise((resolve ,reject)=>{
      environmentAPI.getDetail(
        user=>{
            if(user){
              resolve(uesr)
            }else{
              reject()
            }
        }
      )
    })
  }
}
// mutations
const mutations = {
      allenvironment(state,n){
          state.data1=n
      }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
