// import axios from 'axios'
const cameraUrl = process.env.VUE_APP_CAMERA_API || ''
// export const getRequest = (url, params) => {
//   return axios({
//     method: 'get',
//     url: `${url}`,
//     params: params
//   })
// }
const axios = { get() { } }
// 相机云台控制接口
export function ptzStart(params) {
  return axios.get(`${cameraUrl}/camera/ptz/startMove`, { params: params })
}

export function ptzStop(params) {
  return axios.get(`${cameraUrl}/camera/ptz/stopMove`, { params: params })
}
