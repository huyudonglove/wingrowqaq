<template>
    <div>
      <div v-if="$route.name=='environment'">
        <bar></bar>
        <div>
          <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
          </Row>
        </div>
        <Table :columns="columns1" :data="dataall"></Table>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import { mapActions,mapState  } from 'vuex'
  import bar from './share/bar'
  import leftside from './share/leftside'
  export default {
        name: "environment",
        data(){
          return{
            columns1: [
              {
                title: '环境名称',
                key: 'name',
                render:(h,params)=>{
                  return h('a',{
                    style:{
                      marginRight: '5px',
                      opacity:'.5'
                    },
                    on:{
                      click:()=>{
                        //this.$router.push({path: '/'});
                        this.$router.push({path: '/environment/'+this.dataall[params.index].id});
                        console.log(params)
                      }
                    },
                  },this.dataall[params.index].name)
                }
              },
              {
                title: '创建时间',
                key: 'createTime',
                render: function (h, params) {
                  return h('div',
                    new Date(this.row.createTime).Format('yyyy-MM-dd hh:mm:ss'));/*这里的this.row能够获取当前行的数据*/
                }
              },
              {
                title: '环境描述',
                key: 'description'
              }
            ],
            dataall:[]
          }
        },
        components:{
          bar,
          leftside
        },
        methods:{
          ...mapActions('environment',
            [
              'init',
              'detailinit'
            ]),
          formatDate(timestramp){
            return new Date(timestramp).Format('yyyy-MM-dd');
          },
          initFormatter(){
            Date.prototype.Format = function(fmt) {
              let o = {
                "M+" : this.getMonth()+1,
                "d+" : this.getDate(),
                "h+" : this.getHours(),
                "m+" : this.getMinutes(),
                "s+" : this.getSeconds(),
                "q+" : Math.floor((this.getMonth()+3)/3),
                "S"  : this.getMilliseconds()
              };
              if(/(y+)/.test(fmt))
                fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
              for(var k in o)
                if(new RegExp("("+ k +")").test(fmt))
                  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
              return fmt;
            }
          }

        },
        mounted(){
            this.init().then((u)=>{
              this.dataall=u.results

            });
            console.log(this.$route)
            this.initFormatter();
            this.detailinit();
        },
        computed:{

        }

 }
</script>

<style scoped>

</style>
