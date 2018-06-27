import userAPI from '../../api/user'

//state
const state = {
  user:null 
}





// getters
const getters = {
  isLogin (state ) {
    return state.user!=null;
  } 
}



// actions
const actions = {
  init ({ commit }) {
    return new Promise((resolve, reject) => {
      userAPI.getUserInfo(
	user =>{
   
          
          if(user){
             commit('setUserInfo', user);
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
  setUserInfo(state,user){
    state.user = user;
  }	 
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
