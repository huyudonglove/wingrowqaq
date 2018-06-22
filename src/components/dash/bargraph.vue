<template>
  <div style="background: white">
    <div>系统总览</div>
    <!--<div id="main" style="width: 90%;height: 20rem;" ></div>-->
    <chart :options="polar" style="width: 90%;height: 20rem;" ></chart>
  </div>
</template>

<script>
  //var echarts = require('echarts');
    export default {
      name: "bargraph",
      data(){
        return{
          success:[],
          running:[],
          nobuilt:[],
          failed:[],
          inqueue:[],
          polar:{}
        }
      },
      methods:{
        line(){
         // var myChart = echarts.init(document.getElementById('main'));
          var option={
            tooltip:{},
            color:['#FFA500','#FFFF00','#4BA268','#E4393C','#559EB0'],
            legend:{
              data:["执行中数量",'等待中数量','执行成功数量','执行失败数量','未构建数量'],
              x:'left'
            },
            grid: {
              left: '1%',
              right: '2%',
              bottom: '3%',
              containLabel: true
            },
            //x轴的文本
            xAxis:{
              type: 'value',
              data:[]
            },
            //y轴的文本
            yAxis:{
              type: 'category',
              data:[]
            },
            series:[{
              name:"执行中数量",
              type:"bar",
              data:this.running
            },
              {
                name:"等待中数量",
                type:"bar",
                data:this.inqueue
              },
              {
                name:"执行成功数量",
                type:"bar",
                data:this.success
              },
              {
                name:"执行失败数量",
                type:"bar",
                data:this.failed
              },
              {
                name:"未构建数量",
                type:"bar",
                data:this.nobuilt
              },
            ]
          }
          this.polar=option
          //myChart.setOption(option)
        },
        barnum(){
          this.$http.get('/webapi/dashboard/totalstatus').then(data=>{
            this.success.push(data.data.success)
            this.failed.push(data.data.failed)
            this.running.push(data.data.running)
            this.nobuilt.push(data.data.nobuilt)
            this.inqueue.push(data.data.inqueue)
          })
        }
      },
      mounted() {
          this.line();
          this.barnum();
      }
    }
</script>

<style scoped>

</style>
