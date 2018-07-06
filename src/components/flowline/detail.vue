<template>
  <div>
    <bar></bar>
    <div class="layout">
      <Layout>
        <Content>
          <Row>
            <Col span="24">
            <router-link to="/environment">
              <Button >返回</Button>
            </router-link>
              <Button type="primary">创建流水线</Button>
            </Col>
          </Row>
          <Row>
            <Col span="24">基本信息</Col>
          </Row>
          <Row>
            <Col span="8">环境名称:</Col>
            <Col span="8">创建时间:</Col>
            <Col span="8">环境描述:</Col>
          </Row>
          <Row>
            <Col span="3">1</Col>
            <Col span="12" style="background: rgb(102,168,186)">
              <Row>
                  <Col span="24">流水线总数:</Col>
                  <Col span="12">执行中数量:</Col>
                  <Col span="12">等待中数量:</Col>
                  <Col span="12">成功数量:</Col>
                  <Col span="12">失败数量:</Col>
              </Row>
            </Col>
            <Col span="9">1</Col>
          </Row>
          <Row>
            <Col span="24">环境列表</Col>
            <Col span="24">环境列表</Col>
            <Col span="24">
            <Table border :columns="columns7" :data="data6"></Table>
            </Col>

          </Row>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
import bar from '../share/bar'
    export default {
        name: "detail",
        data(){
          return{
            columns7: [
              {
                title: '流水线名称',
                key: 'server'
              },
              {
                title: '流水线类型',
                key: 'secure'
              },
              {
                title: '当前状态',
                key: 'email'
              },
              {
                title: '最后构建时间',
                key: 'email'
              },
              {
                title: '执行时长(分钟)',
                key: 'email'
              },
              {
                title: '最后结果物',
                key: 'email'
              },
              {
                title: '最后image下载命令',
                key: 'email'
              },
              {
                title: '操作',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.me(params.index)
                        }
                      }
                    }, '修改'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
            data6:[
              {server:'7777777777'}
            ]
          }
        },
        components:{
          bar
        },
        mounted(){
          console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
