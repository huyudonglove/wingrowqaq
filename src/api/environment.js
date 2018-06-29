import axios from 'axios'
export default {
  getEnvironment(success,fail) {
    axios.get('/webapi/misc/sonar')
      .then(function (response) {
        console.log(response.data,"sonar")
        success(response.data);
      })
      .catch(function (error) {
        console.log(error);
        fail(error);
      });
  },
}
