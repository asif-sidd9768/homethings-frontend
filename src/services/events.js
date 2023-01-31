import axios from "axios"
const baseUrl = "http://homethings-env.eba-jx7f4c5m.ap-northeast-1.elasticbeanstalk.com/api"

const getAllEvents = async () => {
  const response = await axios.get(`${baseUrl}/events`)
  return response.data
}

export default {getAllEvents}