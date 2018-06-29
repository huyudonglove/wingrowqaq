import axios from 'axios'
export default {
  getSonar(success,fail) {
    axios.get('/webapi/misc/sonar')
      .then(function (response) {
        console.log(response.data,"sonar88888888888888")
        success(response.data);
      })
      .catch(function (error) {
        console.log(error);
        fail(error);
      });
  },
  putSonar(data){
    axios.put('/webapi/misc/sonar',data).then(data=>{
      if(data.status==200){
        this.$Message.success('修改成功');
      }
    })
  }
}
