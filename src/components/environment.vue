<template>
    <div>
      <bar></bar>
      <div>
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>
      </div>

    </div>
</template>

<script>
  import bar from './share/bar'
  import leftside from './share/leftside'
  export default {
        name: "environment",
        components:{
          bar,
          leftside
        },
        methods:{

        },
        mounted(){

        }

 }
</script>

<style scoped>

</style>
