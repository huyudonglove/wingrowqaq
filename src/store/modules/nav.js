const state = {
  nav:[
    {
      path:'/',
      text:'首页',
      type:'',
      name:'dashboard'
    },
    {
      path:'/environment',
      text:'环境',
      type:'',
      name:'environment'
    },
    {
      path:'',
      text:'系统',
      type:'parent',
      children:[
        {
          path:'/system/control',
          text:'配置管理',
          name:'control'
        }
      ]
    }
  ]
}
// getters
const getters = {

}
// actions
const actions = {

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
