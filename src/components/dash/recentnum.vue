<template>
    <div style="">
      <div>最近构建</div>
      <div>
        <Tabs type="card">
          <TabPane label="最近构建流水线">
            <Row v-for="a in all" :key="a.name" style="border-bottom: 1px solid #ddd;">
              <Col  span="4">
                <div>
                {{a.name}}
                </div>
              <div>
                {{a.startTimeMillis |formatDate}}
              </div>
              </Col>
              <Col  span="20">
                <span v-for="b in a.stages">
                  <span >{{b}}</span>
                </span>
              </Col>
            </Row>
          </TabPane>
          <TabPane label="最近构建失败流水线" >
            <Row v-for="d in falseall" :key="d.name" style="border-bottom: 1px solid #ddd;">
              <Col  span="4">
              <div>
                {{d.name}}
              </div>
              <div>
                {{d.startTimeMillis |formatDate}}
              </div>
              </Col>
              <Col  span="20">
              <span v-for="e in d.stages">
                  <span >{{e}}</span>
                </span>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
</template>

<script>
  import {formatDate} from '../../common/filters.js'
    export default {
        name: "recentnum",
        data(){
          return{
              all:'',
              falseall:'',
          }
        },
        methods:{
          init(){
            this.$http.get('/webapi/dashboard/recentruns?maxNumber=10').then(data=>{
              //console.log(data.data)
              this.all=data.data
            })
          },
          falsenum(){
            this.$http.get('/webapi/dashboard/recentruns?maxNumber=10&status=failed').then(data=>{
              console.log(data.data)
              this.falseall=data.data
            })
          }
        },
        mounted(){
          this.init();
          this.falsenum();
        },
      filters:{
        formatDate(time){
          return formatDate(time,'yyyy-MM-dd HH:mm:ss');
        }
      },
    }
</script>

<style scoped>

</style>
