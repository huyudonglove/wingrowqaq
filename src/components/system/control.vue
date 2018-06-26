<template>
    <div>
      <Tabs type="card">
        <TabPane label="Sonar配置">
            <div>
              <span style="color: red">*</span>
              <span>Sonar地址</span>
              <Input v-model.trim="Sonar.adress"  clearable style="width: 200px"></Input>
            </div>
          <div>
            <span style="color: red">*</span>
            <span>用户名</span>
            <Input v-model.trim="Sonar.username"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <span style="color: red">*</span>
            <span>密码</span>
            <Input v-model.trim="Sonar.password"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <Button  >取消</Button>
            <Button type="primary" >保存</Button>
          </div>
        </TabPane>
        <TabPane label="SMTP配置">
          <div>
            <span style="color: red">*</span>
            <span>服务器地址</span>
            <Input v-model.trim="SMTP.adress"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <span style="color: red">*</span>
            <span>用户</span>
            <Input v-model.trim="SMTP.username"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <span style="color: red">*</span>
            <span>密码</span>
            <Input v-model.trim="SMTP.password"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <span style="color: red">*</span>
            <span>端口</span>
            <Input v-model.trim="SMTP.port"  clearable style="width: 200px"></Input>
          </div>
          <div>
            <span>SSL</span>
            <Checkbox v-model="SMTP.SSL"></Checkbox>
          </div>
          <div>
            <Button  >取消</Button>
            <Button type="primary" >保存</Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
    export default {
        name: "control",
        data(){
          return{
            Sonar:{
              adress:'',
              username:'',
              password:''
            },
            SMTP:{
              adress:'',
              username:'',
              password:'',
              port:'',
              SSL:false
            }
          }
        },
        methods:{
            sonar(){
              this.$http.get('/webapi/misc/sonar').then(data=>{
                this.$store.commit('changeLogin',data.data)
              })
            }
        },
        mouted(){
          this.sonar();
        }
    }
</script>

<style scoped>

</style>
