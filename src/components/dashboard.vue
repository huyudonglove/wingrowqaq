<template>
    <div >
      <bargraph></bargraph>
      <timeline></timeline>
      <recentnum></recentnum>
    </div>
</template>

<script>
  import bargraph from './dash/bargraph'
  import timeline from './dash/timeline'
  import recentnum from './dash/recentnum'
    export default {
        name: "dashboard",
      components:{
        bargraph,
        timeline,
        recentnum
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
