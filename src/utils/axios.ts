import Axios from 'axios'

// const baseURL = 'https://api.fxfi.io:8765'
const baseURL = '/api'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// request interceptors
axios.interceptors.request.use(
  (config: any) => {
    // add important key here
     config.headers['x-pubkey'] = 'rpubKBAbFZz7E75NHqmzyYwKabEm2f5WeMZ9AhgvaMpVRiapRAwbw9FYGuDySjyafJ7ZW7ea5kJBqqfhR1H4SmGKYxsQ6mdsUGnfAUeTutGM31Uw'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      alert(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      alert(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios