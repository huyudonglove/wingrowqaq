<template>
    <div>8888888888888</div>
</template>

<script>
    export default {
        name: "environment",
        methods:{
          init(){
          this.$http.get('/webapi/selfInfo',{

          }).then(function (result) {
            console.log(result)
          })
          }
        },
      mounted(){
          this.init();
      }
    }
</script>

<style scoped>

</style>
