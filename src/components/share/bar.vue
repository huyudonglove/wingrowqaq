<template>
    <div>
      <Row style="height: 1rem">
        <Col span="12">777</Col>
        <Col span="12">8888</Col>
      </Row>
    </div>
</template>

<script>
    export default {
        name: "bar",
        mounted(){
          console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
