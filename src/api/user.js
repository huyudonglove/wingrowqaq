import axios from 'axios'

export default {
  getUserInfo(success,fail) {
        
    axios.get('/webapi/selfInfo')
    .then(function (response) {
          success(response.data);
     })
    .catch(function (error) {
          console.log(error);
          fail(error);
     });


  },

 
}
