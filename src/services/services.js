import axios from "axios"
const baseUrl = "http://homethings-env.eba-jx7f4c5m.ap-northeast-1.elasticbeanstalk.com/api"

const getAllServices = async () => {
  const response = await axios.get(`${baseUrl}/services`)
  return response.data
}

export default {getAllServices}