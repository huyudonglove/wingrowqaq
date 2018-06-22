<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#5b6270', height: '93vh',left: 0, overflow: 'hidden'}">
            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
              <router-link to="/" style="display: block">
                 <MenuItem name="1-1">
                   <Icon type="ios-navigate"></Icon>
                   <span>首页</span>
                 </MenuItem>
              </router-link>
              <router-link to="/environment" style="display: block">
                <MenuItem name="1-2">
                    <Icon type="ios-navigate"></Icon>
                    <span>环境</span>
                </MenuItem>
              </router-link>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  配置
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '10px 24px 24px',overflow: 'auto'}">
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
  methods:{
    init(){
      this.$http.get('/webapi/selfInfo').then(data=>{
        console.log(data)
        this.$store.commit('changeLogin',data.data)
      })
    }
  },
  created(){
      this.init()
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

