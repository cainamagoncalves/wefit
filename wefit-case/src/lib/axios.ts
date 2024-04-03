import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

axios.interceptors.response.use(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000))
})
