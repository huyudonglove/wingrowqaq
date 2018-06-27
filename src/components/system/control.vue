<template>
    <div>
      <Tabs type="card">
        <TabPane label="Sonar配置">
            <div style="padding-left: 100px;margin-top: 10px">
              <span style="color: red">*</span>
              <span>Sonar地址</span>
              <Input v-model.trim="Sonar.sonarUrl"  clearable style="width: 500px;padding-left: 10px" size="large"></Input>
            </div>
          <div style="padding-left: 120px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>用户名</span>
            <Input v-model.trim="Sonar.user"  clearable style="width: 500px;padding-left: 12px" size="large"></Input>
          </div>
          <div style="padding-left: 130px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>密码</span>
            <Input v-model.trim="Sonar.password"  clearable style="width: 500px;padding-left: 12px" size="large" type="password"></Input>
          </div>
          <div style="padding-left: 175px;margin-top: 10px">
            <Button  @click="sonar">取消</Button>
            <Button type="primary" @click="storesonar">保存</Button>
          </div>
        </TabPane>
        <TabPane label="SMTP配置">
          <div style="padding-left: 130px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>服务器地址</span>
            <Input v-model.trim="SMTP.host"  clearable style="width: 500px;padding-left: 12px" size="large"></Input>
          </div>
          <div style="padding-left: 166px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>用户</span>
            <Input v-model.trim="SMTP.user"  clearable style="width: 500px;padding-left: 12px" size="large"></Input>
          </div>
          <div style="padding-left: 166px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>密码</span>
            <Input v-model.trim="SMTP.password"  clearable style="width: 500px;padding-left: 12px" size="large" type="password"></Input>
          </div>
          <div style="padding-left: 166px;margin-top: 10px">
            <span style="color: red">*</span>
            <span>端口</span>
            <Input v-model.trim="SMTP.port"  clearable style="width: 500px;padding-left: 12px" size="large"></Input>
          </div>
          <div style="padding-left: 176px;margin-top: 10px">
            <span>SSL</span>
            <Checkbox v-model="SMTP.ssl" style="padding-left: 12px"></Checkbox>
          </div>
          <div style="padding-left: 220px;margin-top: 10px">
            <Button  @click="smtp">取消</Button>
            <Button type="primary" @click="storesmtp">保存</Button>
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
              sonarUrl:'',
              user:'',
              password:''
            },
            SMTP:{
              host:'',
              user:'',
              password:'',
              port:'',
              ssl:'',
            }
          }
        },
        methods:{
            sonar(){
              this.$http.get('/webapi/misc/sonar').then(data=>{
                console.log(data)
                if(data.status==200){
                  this.Sonar.sonarUrl=data.data.sonarUrl
                  this.Sonar.user=data.data.user
                  this.Sonar.password=data.data.password
                }
              })
            },
            storesonar(){
              this.$http.put('/webapi/misc/sonar',this.Sonar).then(data=>{
                console.log(data)
                if(data.status==200){
                  this.$Message.success('修改成功');
                }
                this.sonar();
              })
            },
            smtp(){
              this.$http.get('/webapi/misc/smtp').then(data=>{
                console.log(data)
                if(data.status==200){
                  this.SMTP.host=data.data.host
                  this.SMTP.user=data.data.user
                  this.SMTP.password=data.data.password
                  this.SMTP.port=data.data.port
                  this.SMTP.ssl=data.data.ssl
                }
              })
            },
            storesmtp(){
              this.$http.put('/webapi/misc/smtp',this.SMTP).then(data=>{
                console.log(data)
                if(data.status==200){
                  this.$Message.success('修改成功');
                }
                this.smtp();
              })
            }
        },
        mounted(){
          this.sonar();
          this.smtp();
        }
    }
</script>

<style scoped>

</style>
