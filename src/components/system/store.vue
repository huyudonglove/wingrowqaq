<template>
    <div>
      <Table border :columns="columns7" :data="data6"></Table>
      <Modal
        v-model="modal1"
        title="修改仓库"
        @on-ok="ok"
        @on-cancel="cancel">
        <div>
          <Input v-model="current.server" >
              <span slot="prepend">地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <p>
            <span>是否安全连接</span>
            <Checkbox v-model="current.secure"></Checkbox>
          </p>
          <Input v-model="current.auth" style="margin-top: 10px">
              <span slot="prepend">Auth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>
          <Input v-model="current.email" style="margin-top: 10px">
              <span slot="prepend">Secret&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Input>

        </div>
      </Modal>
    </div>
</template>

<script>
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
          currentNum:'',
          current:'',
        store:{
            adress:'',
        }
        }
      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        },
        me(a){
            this.modal1=true
            console.log(a)
            this.currentNum=a;
            this.current=this.data6[a]
        },
        ok () {
          this.$Message.info('Clicked ok');

          console.log(this.store.adress)
        },
        cancel () {
          this.$Message.info('Clicked cancel');
        },
        init(){
          this.$http.get('/webapi/misc/registry').then(data=>{
            console.log(data.data)
            this.data6=data.data;
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
