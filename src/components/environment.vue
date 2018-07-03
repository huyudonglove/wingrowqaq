<template>
    <div>
      <bar></bar>
      <div>
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>
      </div>
      <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import bar from './share/bar'
  import leftside from './share/leftside'
  export default {
        name: "environment",
        data(){
          return{
            columns1: [
              {
                title: '环境名称',
                key: 'name'
              },
              {
                title: '创建时间',
                key: 'createTime'
              },
              {
                title: '环境描述',
                key: 'description'
              }
            ],
            data1: [
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
              },
              ]
          }
        },
        components:{
          bar,
          leftside
        },
        methods:{
          ...mapActions('environment',
            [
              'init'
            ]),
        },
        mounted(){
            this.init()
        }

 }
</script>

<style scoped>

</style>
