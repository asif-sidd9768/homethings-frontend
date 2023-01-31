import axios from 'axios'
const baseUrl = 'http://homethings-env.eba-jx7f4c5m.ap-northeast-1.elasticbeanstalk.com/api'

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/login`, credentials)
  console.log('abc === ' ,response.statusCode)
  return response.data
}

const register = async credentials => {
  console.log('cered == ', credentials)
  const response = await axios.post(`${baseUrl}/users`, credentials)
  console.log(response.data)
  return response.data
}


export default { login, register }