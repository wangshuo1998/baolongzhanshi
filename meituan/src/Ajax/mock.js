import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})
instance.interceptors.request.use(config => {
  return config
})
instance.interceptors.response.use(value => {
  return value.data;
}, err => {
  alert(err);
  return new Promise(() => {});
})
export default instance