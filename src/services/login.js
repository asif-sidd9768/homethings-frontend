import axios from 'axios'
const baseUrl = 'http://homethings-env.eba-jx7f4c5m.ap-northeast-1.elasticbeanstalk.com/api/login'

const login = async credentials => {
  console.log('===== ',credentials)
  try {
    const response = await axios.post(baseUrl, credentials)
    console.log(response.data)
    return response.data
  }catch(e) {
    console.log('avc == ',e)
  }
  
  // console.log('response == ', response)
  
}

export default { login }