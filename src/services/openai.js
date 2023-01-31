import axios from "axios"
const baseUrl = "http://homethings-env.eba-jx7f4c5m.ap-northeast-1.elasticbeanstalk.com/api"

const getFunData = async (data) => {
  console.log('to send === ', data)
  const response = await axios.post(`${baseUrl}/fun`, data)
  console.log(response.data)
  return "hello"
  //return response
}

export default getFunData