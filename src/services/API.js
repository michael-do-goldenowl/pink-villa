import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
