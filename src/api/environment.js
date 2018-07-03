import axios from 'axios'
export default {
  getEnvironment(success,fail) {
    axios.get('/webapi/projectgroup?maxResult=10&firstResult=0')
      .then(function (response) {
        console.log(response.data,"environment")
        success(response.data);
      })
      .catch(function (error) {
        console.log(error);
        fail(error);
      });
  },
}
