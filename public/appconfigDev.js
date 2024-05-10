// eslint-disable-next-line no-unused-vars
const config = {
  mesTitle: '汇博教学资源管理概览',
  mesConfig: [
    {
      urlList: [
        {
          type: 'web',
          name: '汇博签到',
          url: 'http://robotxcould.cn/mesKanban/#/signManage',
          // testLink:
          //   'http://192.168.0.151:8889/mes/device/device-type/get-all-type',
          testLink:
            'http://192.168.0.111:3005/model/border.png?t=' +
            new Date().getTime(),
          errUrl: '/errorImgs/传感器.gif',
        },
        {
          type: 'web',
          name: '汇博签到2',
          url: 'http://robotxcould.cn/mesKanban/#/signManage',
          // testLink:
          //   'http://192.168.0.151:8889/mes/device/device-type/get-all-type',
          testLink:
            'http://192.168.0.111:3005/model/border.png?t=' +
            new Date().getTime(),
          errUrl: '/errorImgs/传感器.gif',
        },

        // {
        //   type: 'web',
        //   name: '成绩查看',
        //   url: 'http://robotxcould.cn/mesKanban/#/scoreQuery',
        //   testLink: '',
        // },
        // {
        //   type: 'web',
        //   name: '证书模板',
        //   url: 'http://robotxcould.cn/mesKanban/#/codeManagement',
        //   testLink: '',
        // },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },

    {
      urlList: [
        {
          type: 'web',
          name: '汇博工业互联网数字驱动平台',
          url: 'http://192.168.0.111:3005/#/deviceScreen',
          testLink:
            'http://192.168.0.111:3005/model/border.png?t=' +
            new Date().getTime(),
          errUrl: '/errorImgs/工业互联网.png',
        },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },
    {
      urlList: [
        {
          type: 'web',
          name: '考核视频',
          url: 'http://robotxcould.cn/hbExammanage/score-query',
          testLink:
            'http://47.114.105.112:3108/sao/files/10000509/download1111',
          errUrl: 'http://localhost:81/errorImgs/机器人部署工具.png',
        },
        {
          type: 'web',
          name: '考核视频',
          url: 'http://robotxcould.cn/hbExammanage/score-query',
          testLink:
            'http://47.114.105.112:3108/sao/files/10000509/download22222',
          errUrl: 'http://localhost:81/errorImgs/机器人视觉.gif',
        },
      ],
      enable: true,
      resendInterval: 3000, //图片请求重发间隔
    },
    {
      urlList: [
        {
          type: 'web',
          name: '1-实训室现场签到',
          url: 'http://robotxcould.cn/mesKanban/#/signManage',
          testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost:81/errorImgs/云实训签到.png',
        },
        {
          type: 'web',
          name: '2-现场考核记录',
          url: 'http://robotxcould.cn/mesKanban/#/examVideo',
          testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost:81/errorImgs/云考试现场.gif',
        },
        {
          type: 'web',
          name: '3-成绩统计查看',
          url: 'http://robotxcould.cn/mesKanban/#/scoreQuery',
          testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost:81/errorImgs/云成绩统计.png',
        },
        {
          type: 'web',
          name: '4-电子证书发放',
          url: 'http://robotxcould.cn/mesKanban/#/codeManagement',
          testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost:81/errorImgs/云证书发放.png',
        },
      ],
      enable: false,
      resendInterval: 3000, //图片请求重发间隔
    },
  ],
  axiosTimeout: 3000,
  drawInterval: 0, //挨个渲染间隔
  mesInterval: 400000, // 轮播时间间隔毫秒
}

window.appconfig = config
