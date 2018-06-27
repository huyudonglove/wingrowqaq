<template>
    <div>
      <bar></bar>
      <div>
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>
          <button @click="metest">7777777777777777</button>
        <button @click="all">8888</button>
      </div>
    </div>
</template>

<script>
  import bar from './share/bar'
  import { mapMutations } from 'vuex'
  export default {
        name: "environment",
        components:{
          bar,
        },
        methods:{
          ...mapMutations([
            'metest',
            'all'
          ])
        },
        mounted(){
          this.all()
        }

 }
</script>

<style scoped>

</style>
