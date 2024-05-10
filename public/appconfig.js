// eslint-disable-next-line no-unused-vars
const config = {
  account: [
    {
      userName:
        'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec',
      password:
        'f5fd9b302cb181e9744841c2106dfa2f37ea9bdb078dfe0357cbc21f602183f463bb1df0fef406ff98611d60afb6cd97a24945b864aca3102dbaffe9688fb145',
    },
  ],
  mesTitle: '汇博教学资源管理概览',
  mesConfig: [
    {
      urlList: [
        {
          type: 'web',
          name: '汇博签到',
          url: 'http://120.55.63.142/tech#/home',
          testLink: 'http://192.168.0.66:83/favicon.ico',
          errUrl: 'http://localhost:81/errorImgs/传感器.gif',
        },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },
    {
      urlList: [
        {
          type: 'web',
          name: '汇博签到',
          url: 'http://120.55.63.142/tech#/home',
          testLink: 'http://192.168.0.45:83/favicon.ico',
          errUrl: 'http://localhost:81/errorImgs/传感器.gif',
        },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },
    {
      urlList: [
        {
          type: 'web',
          name: '汇博签到',
          url: 'http://120.55.63.142/tech#/home',
          testLink: 'http://192.168.0.66:83/favicon.ico',
          errUrl: 'http://localhost:81/errorImgs/传感器.gif',
        },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },
  ],
  axiosTimeout: 3000,
  drawInterval: 0, //挨个渲染间隔
  mesInterval: 400000, // 轮播时间间隔毫秒
}

window.appconfig = config
