import systemAPI from '../../api/system'
//state
const state = {
    sonarall:{id:1},
    bb:{q:1}
}
// getters
const getters = {

}
// actions
const actions = {
  sonarinit () {
    return new Promise((resolve, reject) => {
      systemAPI.getSonar(
        user =>{
          if(user){
            resolve(user);
          }else{
            reject();
          }
        }
      )
    });
  },
  sonarme(data){
    //console.log(data,'pp')
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
  }
}



// mutations
const mutations = {
    test(a,b){
        console.log('====',b)
        this.state.system.bb=b
          console.log('***',this.state.system.bb)

    }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
