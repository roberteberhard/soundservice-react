import axios from 'axios'
const BASE_URL = 'https://cms.soundservice.com/api/sose/v1'

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
