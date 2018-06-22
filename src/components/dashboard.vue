<template>
    <div>
    <bargraph></bargraph>
    </div>
</template>

<script>
  import bargraph from './dash/bargraph'
    export default {
        name: "dashboard",
      components:{
        bargraph,
      },
      methods:{

      },
      mounted(){
          console.log(this.$route)
      },
      computed:{

      }
    }
</script>

<style scoped>

</style>
