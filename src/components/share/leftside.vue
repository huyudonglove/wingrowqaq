<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#5b6270', height: '57.5rem',left: 0, overflow: 'hidden'}">
      <Menu :active-name='$route.name' theme="dark" width="auto" >
        <router-link :to="a.path" style="display: block" v-if="!a.type" v-for="a in nav" :key="a.name">
          <MenuItem :name="a.name">
            <Icon type="ios-navigate"></Icon>
            <span>{{a.text}}</span>
          </MenuItem>
        </router-link>
        <Submenu name="system" v-if="b.type=='parent'" v-for="b in nav" :key="b.name">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            <span>{{b.text}}</span>
          </template>
          <router-link :to="c.path" style="display: block" v-for="c in b.children" :key="c.name">
            <MenuItem :name="c.name">{{c.text}}</MenuItem>
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
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "leftside",
        computed:{
          ...mapState('nav',{
            nav:state=>state.nav
          })
        },
        mounted(){
          console.log(this.nav,'pppp')
        }
    }
</script>

<style scoped>

</style>
