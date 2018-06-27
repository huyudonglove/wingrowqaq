<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" >
            <div class="layout-logo"></div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#5b6270', height: '57.5rem',left: 0, overflow: 'hidden'}">
            <Menu :active-name='$route.name' theme="dark" width="auto" >
              <router-link to="/" style="display: block">
                 <MenuItem name="dashboard">
                   <Icon type="ios-navigate"></Icon>
                   <span>首页</span>
                 </MenuItem>
              </router-link>
              <router-link to="/environment" style="display: block">
                <MenuItem name="environment">
                    <Icon type="ios-navigate"></Icon>
                    <span>环境</span>
                </MenuItem>
              </router-link>
              <Submenu name="system">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  系统
                </template>
                <router-link to="/system/control" style="display: block">
                  <MenuItem name="control">配置管理</MenuItem>
                </router-link>
                <router-link to="/system/store" style="display: block">
                  <MenuItem name="store">仓库</MenuItem>
                </router-link>
              </Submenu>
            </Menu>
          </Sider>

          <Layout :style="{padding: '10px 24px 24px',overflow: 'hidden'}">
            <Content :style="{padding: '0', minHeight: '280px', background: '#F5F7F9'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>

  
export default {
  name: 'App',
  data(){
    return{
      me:'environment'
    }
  },
  methods:{
       checkUserIsLogin(){
           this.$store.dispatch('user/init').then((u)=>{
                   console.log(u);
       
           },()=>{
                 console.log("no login");
                 //redict to cas server;
           });
       }
  },
  created(){
       this.checkUserIsLogin();
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

