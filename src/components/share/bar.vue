<template>
    <div class="bar">
      <Breadcrumb v-if="$route.name=='environment'">
        <span>当前位置:</span>
        <BreadcrumbItem to="/environment">环境</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb v-if="$route.name=='detail'">
        <span>当前位置:</span>
        <BreadcrumbItem to="/environment">环境</BreadcrumbItem>
        <BreadcrumbItem >详情</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb v-if="$route.name=='control'">
        <span>当前位置:</span>
        <BreadcrumbItem to="/environment">配置管理</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb v-if="$route.name=='store'">
        <span>当前位置:</span>
        <BreadcrumbItem to="/environment">仓库</BreadcrumbItem>
      </Breadcrumb>
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
.bar{
  position: relative;
  width: 100%;
  background: white;
}
</style>
