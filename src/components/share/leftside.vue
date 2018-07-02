<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#5b6270', height: '57.5rem',left: 0, overflow: 'hidden'}">
      <Menu :active-name='$route.name' theme="dark" width="auto" v-for="me in nav" :key="me.name">
        <router-link v-if="!me.children":to="me.path" style="display: block"   :key="me.name">
          <MenuItem :name="me.name">
            <Icon type="ios-navigate"></Icon>
            <span>{{me.text}}</span>
          </MenuItem>
        </router-link>
        <Submenu name="system" v-if="me.children"  :key="me.name">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            <span>{{me.text}}</span>
          </template>
          <router-link :to="c.path" style="display: block" v-for="c in me.children" :key="c.name">
            <MenuItem :name="c.name">{{c.text}}</MenuItem>
          </router-link>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{padding: '10px 24px 24px',overflow: 'hidden',display:'inline-block'}">
      <Content :style="{padding: '0', minHeight: '280px', background: '#F5F7F9'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
    export default {
        name: "leftside",
        computed:{

        },
        mounted(){
        },
        props:{
          nav:''
        }
    }
</script>

<style scoped>
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
</style>
