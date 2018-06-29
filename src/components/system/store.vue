<template>
    <div>
      <Button type="primary" @click="creat">创建仓库</Button>
      <Table border :columns="columns7" :data="data6"></Table>
      <Modal
        v-model="modal1"
        title="修改仓库"
        @on-ok="ok"
        >
        <div>
          <Input v-model="current.server" disabled>
              <span slot="prepend">地址<span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <p style="margin-top: 20px">
            <span>是否安全连接</span>
            <Checkbox v-model="current.secure" style="margin-left: 5px;"></Checkbox>
          </p>
          <Input v-model="current.auth" style="margin-top: 10px">
              <span slot="prepend">Auth<span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <Input v-model="current.email" style="margin-top: 10px">
              <span slot="prepend">Secret<span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>

        </div>
      </Modal>
      <Modal
        v-model="modal2"
        title="创建仓库"
        @on-ok="ok2"
        >
        <div>
          <Input  placeholder="请输入合法IP地址" v-model.trim="creatmsg.server" clearable>
          <span slot="prepend">地址 <span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <p style="margin-top: 20px" >
            <span>是否安全连接</span>
            <Checkbox  style="margin-left: 5px;" v-model="creatmsg.secure" ></Checkbox>
          </p>
          <Input  style="margin-top: 10px" placeholder="请输入合法base64位auth" v-model.trim="creatmsg.auth" clearable>
          <span slot="prepend">Auth<span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <Input  style="margin-top: 10px" placeholder="部署镜像仓库时配置的WINGROWSERVICE_SECRET" v-model.trim="creatmsg.email" clearable>
          <span slot="prepend">Secret<span style="color: red">*</span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>

        </div>
      </Modal>
      <Modal
        title="确认删除吗?"
        v-model="modal3"
        @on-ok="sure"
        @on-cancel="no"
        >
        <p>{{deleteserver}}</p>

      </Modal>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
        name: "store",

      data () {
        return {
          columns7: [
            {
              title: '地址',
              key: 'server'
            },
            {
              title: '是否安全连接',
              key: 'secure'
            },
            {
              title: 'Secert',
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
          data6: [],
          modal1:false,
          modal2:false,
          modal3:false,
          currentNum:'',
          current:'',
          store:{
            adress:'',
          },
          creatmsg:{
              auth:'',
              email:'',
              reboot:false,
              secure:false,
              server:''
          },
          deleteserver:''
        }
      },
      methods: {
        remove (index) {
          this.modal3=true;
          this.deleteserver=this.data6[index].server;
        },
        sure(){
          this.$http.delete('/webapi/misc/registry/'+this.deleteserver,"application/json").then(data=>{
            if(data.status==200){
              if(!data.data.exception){
                this.$Message.success('删除成功');
              }else {
                this.$Message.error('删除失败');
              }
            }else {
              this.$Message.info('删除失败');
            }
            this.init();
          })
        },
        no(){
          this.modal3=false
        },
        me(a){
            this.modal1=true
            console.log(a)
            this.currentNum=a;
            this.current=this.data6[a]
        },
        ok () {
          var data=this.current
          console.log(this.current.server)
          this.$http.put('/webapi/misc/registry/'+this.current.server,data,"application/json").then(data=>{
            if(data.status==200){
              if(!data.data.exception){
                this.$Message.success('修改成功');
              }else {
                this.$Message.error('修改失败');
              }
            }else {
              this.$Message.info('修改失败');
            }
            this.init();
          })
        },
        ok2(){
          var data=this.creatmsg
          this.$http.post('/webapi/misc/registry',data,"application/json").then(data=>{
            console.log(data)
            if(data.status==200){
              if(!data.data.exception){
                this.$Message.success('创建成功');
              }else {
                this.$Message.error('创建失败');
              }
            }else {
              this.$Message.error('创建失败');
            }
            this.init();
          })
        },
        cancel () {
          this.$Message.info('已取消');
        },
        init(){
          this.$http.get('/webapi/misc/registry').then(data=>{
            this.data6=data.data;
          })
        },
        creat(){
          this.modal2=true
        },

      },

      mounted(){
          this.init();

      }
    }
</script>

<style scoped>

</style>
