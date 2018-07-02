<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" >
            <div class="layout-logo"></div>
          </Menu>
        </Header>
          <leftside :nav="nav"></leftside>
      </Layout>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex'
  import leftside from './components/share/leftside'
export default {
  name: 'App',
  data(){
    return{
      me:'environment'
    }
  },
  components:{
      leftside
  },
  methods:{
       checkUserIsLogin(){
           this.$store.dispatch('user/init').then((u)=>{
                   console.log(u);
           },()=>{
                 console.log("no login");
           });
       },
    ...mapActions('user',
      [
        'init',
      ])
  },
  computed:{
    ...mapState('nav',{
      nav:state=>state.nav
    })
  },
  created(){
       //this.checkUserIsLogin();
       this.init().then((u) => {
         //console.log(u)
       });

  }
}
</script>
<style scoped>
  body{
    margin: 0;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  a{
    color: black;
  }
</style>

