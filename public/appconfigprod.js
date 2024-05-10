// eslint-disable-next-line no-unused-vars
const config = {
  mesTitle: '汇博智慧实训管理系统',

  mesConfig: [
  
	 {
       urlList: [
         {
           type: 'web',
           name: '汇博智能传感器数据看板',
           url: 'http://192.168.33.1:8888/',
		   testLink: 'http://192.168.33.1:9120/io/page',
           errUrl: 'http://localhost/errorImgs/传感器.gif',
         },

         {
           type: 'web',
           name: '汇博智能传感器网络拓扑图',
           url: 'http://192.168.33.1:8888/deviceDistribution',
		   testLink: 'http://192.168.33.1:9120/io/page',
           errUrl: 'http://localhost/errorImgs/拓扑图.gif',
		      
         },
       ],
	   enable: true,
       resendInterval: 3000, //图片请求重发间隔
     },
	 
	 {
      urlList: [
         {
           type: 'web',
           name: '汇博工业互联网数字驱动平台',
           url: 'http://192.168.33.8:8889/#/screen?id=2&name=%E5%B7%A5%E4%B8%9A%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E5%8E%822&type=fanuc',
		   testLink: 'http://192.168.33.8:8889/logo.png?t='+new Date().getTime(),
           errUrl: 'http://localhost/errorImgs/工业互联网.png',
		
	     },
       ],
	   enable: true,
       resendInterval: 3000, //图片请求重发间隔
     },
	 
	 {
       urlList: [
        // {
        //   type: 'web',
        //   name: '智能制造MES系统生产订单',
        //  url: 'http://192.168.33.3:8889/#/production/manualSchedule',
        //},

         {
           type: 'web',
           name: '汇博智能制造MES系统',
           url: 'http://192.168.33.3:8889/#/device/kanban',
		   testLink: 'http://192.168.33.3:8889/mes/device/device-type/get-all-type',
           errUrl: 'http://localhost/errorImgs/mesKanban.gif',
         },
       ],
	   enable: true,
       resendInterval: 3000, //图片请求重发间隔
     },
	 
	 {
      urlList: [
         {
           type: 'web',
           name: '汇博服务机器人路径规划',
           url: 'http://192.168.33.87:8888/XJ/#/deploy/index',
		   testLink: 'http://192.168.33.87:8181/task/check-point/list/condition?sn=00044b8ccb2f&status=1',
           errUrl: 'http://localhost/errorImgs/机器人部署工具.png',
	     },
         {
           type: 'web',
           name: '汇博服务机器人视觉',
           url: 'http://192.168.33.87:8889/#/liveView',
		   testLink: 'http://192.168.33.87:1985/rtc/v1/play/',
           errUrl: 'http://localhost/errorImgs/机器人视觉.gif',
		   
	     },
       ],
	   enable: true,
       resendInterval: 3000, //图片请求重发间隔
     },
	 
	 {
      urlList: [
        {
          type: 'web',
          name: '院校接入汇博中台',
          url: 'https://www.huiborobot.com.cn:3183/hbEnterprise/approve',
		  testLink: '',
		  errUrl: '',

        },
        {
          type: 'web',
          name: '院校基本信息采集',
          url: 'https://www.huiborobot.com.cn:3183/hbDataPlatform/partyBuilding/organization',
		   testLink: '',
		  errUrl: '',
        },
        {
          type: 'web',
          name: '数据定时同步推送',
          url: 'https://www.huiborobot.com.cn:3183/hbDataPlatform/sync/syncTable',
		   testLink: '',
		  errUrl: '',
        },
        {
          type: 'web',
          name: '教育部1:1数据看板',
          url: 'https://www.huiborobot.com.cn:3183/hbDataPlatform/dataPlatBoard',
		  testLink: '',
		  errUrl: '',
        },
      ],
	  enable: false,
      resendInterval: 3000, //图片请求重发间隔
     },
	 
	 
     {
      urlList: [
        {
          type: 'web',
          name: '1-实训室现场签到',
          url: 'http://robotxcould.cn/mesKanban/#/signManage',
		  testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost/errorImgs/云实训签到.png',
        },
        {
          type: 'web',
          name: '2-现场考核记录',
          url: 'http://robotxcould.cn/mesKanban/#/examVideo',
		  testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost/errorImgs/云考试现场.gif',
        },
        {
          type: 'web',
          name: '3-成绩统计查看',
          url: 'http://robotxcould.cn/mesKanban/#/scoreQuery',
		  testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost/errorImgs/云成绩统计.png',
        },
        {
          type: 'web',
          name: '4-电子证书发放',
          url: 'http://robotxcould.cn/mesKanban/#/codeManagement',
		  testLink: 'http://47.114.105.112:3108/sao/files/10000509/download',
          errUrl: 'http://localhost/errorImgs/云证书发放.png',
        },
      ],
	  enable: true,
      resendInterval: 3000, //图片请求重发间隔
     },
  ],
  axiosTimeout:2000, //ping超时时间
  drawInterval: 0, //挨个渲染间隔
  mesInterval: 25000, // 轮播时间间隔毫秒
}

window.appconfig = config
