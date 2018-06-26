<template>
    <div>
      <bar></bar>
      <router-view></router-view>
    </div>
</template>

<script>
  import bar from '../share/bar'
    export default {
        name: "system",
        components:{
          bar
        }
    }
</script>

<style scoped>

</style>
