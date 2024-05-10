const DCGHUrl = 'http://localhost/books/DCGH'
const PYFAUrl = 'http://localhost/books/PYFA'
const XBJCUrl = 'http://localhost/books/XBJC'
const JXZYUrl = 'http://localhost/books/JXZY'
const bookConfig = {
  topPlan: {
    list: [
      {
        show: 2,
        repeatX: 1,
        frameWidth: '33%',
        width: '290px',
        mode: 'portrait',
        title: '专业可研报告',
        imgHideBg: true,
        animate: 'animate__fadeInLeft',
        animateFlag: 'animate',
        list: [
          {
            img: '/images/DCGH/report/01.jpg',
            url: DCGHUrl + '/ZYKYBG' + '/工业机器人专业建设可行性论证报告.pdf',
          },
          {
            img: '/images/DCGH/report/02.jpg',
            url: DCGHUrl + '/ZYKYBG' + '/人工智能专业建设可行性论证报告.pdf',
          },
          {
            img: '/images/DCGH/report/03.jpg',
            url:
              DCGHUrl +
              '/ZYKYBG' +
              '/智能（服务）机器人专业建设可行性论证报告.pdf',
          },
          {
            img: '/images/DCGH/report/04.jpg',
            url:
              DCGHUrl + '/ZYKYBG' + '/智能制造工程专业建设可行性论证报告.pdf',
          },
        ],
      },
      {
        show: 2,
        repeatX: 1,
        animate: 'animate__fadeInUp',
        animateFlag: 'animate',
        frameWidth: '33%',
        width: '290px',
        mode: 'portrait',
        title: '专业建设整体解决方案',
        imgHideBg: true,
        list: [
          {
            img: '/images/DCGH/plan/01.jpg',
            url:
              DCGHUrl + '/ZYJSZTJJFA' + '/AI智能机器人专业建设整体解决方案.pdf',
          },
          {
            img: '/images/DCGH/plan/02.png',
            url: DCGHUrl + '/ZYJSZTJJFA' + '/产教融合虚拟仿真基地解决方案.pdf',
          },
          {
            img: '/images/DCGH/plan/03.png',
            url: DCGHUrl + '/ZYJSZTJJFA' + '/服务机器人应用与维护建设方案.pdf',
          },
          {
            img: '/images/DCGH/plan/04.png',
            url:
              DCGHUrl +
              '/ZYJSZTJJFA' +
              '/智能制造人才培养与专业（群）建设方案.pdf',
          },
          {
            img: '/images/DCGH/plan/05.png',
            url: DCGHUrl + '/ZYJSZTJJFA' + '/工业互联网应用专业建设方案.pdf',
          },
          {
            img: '/images/DCGH/plan/06.png',
            url:
              DCGHUrl + '/ZYJSZTJJFA' + '/工业机器人人才培养与专业建设方案.pdf',
          },
        ],
      },
      {
        show: 2,
        repeatX: 1,
        animate: 'animate__fadeInRight',
        animateFlag: 'animate',
        width: '290px',
        frameWidth: '33%',
        mode: 'portrait',
        title: '实训基地建设方案',
        imgHideBg: true,
        list: [
          {
            img: '/images/DCGH/sxjd/06.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/10000W-HB-2020092R1 先进制造产教融合共享型虚拟仿真实训基地建设方案.pdf',
          },
          {
            img: '/images/DCGH/sxjd/05.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/2370W-HB-2020229R3 智能制造产教融合创新应用公共实训基地建设方案.pdf',
          },
          {
            img: '/images/DCGH/sxjd/04.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/1134W-HB-2021226 智能制造产教融合创新应用实训基地建设方案.pdf',
          },
          {
            img: '/images/DCGH/sxjd/03.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/1000W-HBYF-202004  智能制造技能实训与产业示范基地建设方案.pdf',
          },
          {
            img: '/images/DCGH/sxjd/02.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/800W-HB-2022023R1  智能制造工程技术中心建设方案.pdf',
          },
          {
            img: '/images/DCGH/sxjd/01.png',
            url:
              DCGHUrl +
              '/SXJDJSFA/650W-HB-2022029R1 智能制造生产管理与控制实训基地建设方案.pdf',
          },
        ],
      },
    ],
  },
  trainProgram: {
    list: [
      {
        show: 8,
        repeatX: 4,
        width: '19%',
        title: '培养方案',
        animate: 'animate__fadeInRight',
        animateFlag: 'animate',
        mode: 'portrait',
        list: [
          {
            img: '/images/PYFA/01.jpg',
            url: PYFAUrl + '/高职本科-工业互联网工程专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/02.jpg',
            url: PYFAUrl + '/高职本科-机器人技术专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/03.jpg',
            url: PYFAUrl + '/高职本科-智能制造工程技术专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/04.jpg',
            url: PYFAUrl + '/高职专科-工业互联网应用专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/05.jpg',
            url: PYFAUrl + '/高职专科-工业机器人技术专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/06.jpg',
            url: PYFAUrl + '/高职专科-智能机器人技术专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/07.jpg',
            url:
              PYFAUrl + '/技工技师- 服务机器人应用与维护专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/10.png',
            url: PYFAUrl + '/技工技师-智能制造技术应用专业培养方案（初五）.pdf',
          },
          {
            img: '/images/PYFA/08.jpg',
            url: PYFAUrl + '/技工技师-智能制造技术应用专业培养方案（高四）.pdf',
          },
          {
            img: '/images/PYFA/09.jpg',
            url: PYFAUrl + '/普通本科-机器人工程专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/11.jpg',
            url: PYFAUrl + '/普通本科-智能制造工程专业人才培养方案.pdf',
          },
          {
            img: '/images/PYFA/12.jpg',
            url: PYFAUrl + '/中职专科-工业机器人技术应用专业人才培养方案.pdf',
          },
        ],
      },
    ],
  },
  books: {
    list: [
      {
        show: 8,
        repeatX: 4,
        width: '19%',
        title: '校本教材',
        mode: 'portrait',
        animate: 'animate__fadeInRight',
        animateFlag: 'animate',
        list: [
          {
            img: '/images/XBJC/01.jpg',
            url: XBJCUrl + '/工业机器人操作与系统应用（ABB IRB 1410）.pdf',
          },
          {
            img: '/images/XBJC/02.jpg',
            url: XBJCUrl + '/工业机器人操作与应用.pdf',
          },
          {
            img: '/images/XBJC/03.jpg',
            url: XBJCUrl + '/工业机器人拆装与调试.pdf',
          },
          {
            img: '/images/XBJC/04.jpg',
            url: XBJCUrl + '/RoboDK应用基础.pdf',
          },
          {
            img: '/images/XBJC/05.jpg',
            url: XBJCUrl + '/工业机器人系统集成技术.pdf',
          },
          {
            img: '/images/XBJC/06.jpg',
            url: XBJCUrl + '/工业机器人运动控制入门.pdf',
          },
          {
            img: '/images/XBJC/07.jpg',
            url: XBJCUrl + '/机电一体化技术实训项目单组合完整版.pdf',
          },
          {
            img: '/images/XBJC/08.jpg',
            url: XBJCUrl + '/C10系列机器人编程手册.pdf',
          },
          {
            img: '/images/XBJC/09.jpg',
            url: XBJCUrl + '/HB3-760-C10机器人电气维护手册.pdf',
          },
          {
            img: '/images/XBJC/10.jpg',
            url: XBJCUrl + '/HB3-760-C10机器人机械使用维护手册.pdf',
          },
          {
            img: '/images/XBJC/11.jpg',
            url: XBJCUrl + '/模块化机器人教学项目单.pdf',
          },
          {
            img: '/images/XBJC/12.jpg',
            url: XBJCUrl + '/模块作业型教学机器人教学大纲.pdf',
          },
          {
            img: '/images/XBJC/13.jpg',
            url: XBJCUrl + '/机电一体化综合生产实训系统安装维护课程大纲.pdf',
          },
          {
            img: '/images/XBJC/14.jpg',
            url: XBJCUrl + '/应用型本科实验室配置方案.pdf',
          },
          {
            img: '/images/XBJC/15.jpg',
            url: XBJCUrl + '/工业机器人工作原理.pdf',
          },
          {
            img: '/images/XBJC/16.jpg',
            url: XBJCUrl + '/工业机器人关键零部件.pdf',
          },
          {
            img: '/images/XBJC/17.jpg',
            url: XBJCUrl + '/工业机器人操作与系统应用（ABB IRB 120）.pdf',
          },
          {
            img: '/images/XBJC/18.jpg',
            url: XBJCUrl + '/工业机器人使用与维护.pdf',
          },
          {
            img: '/images/XBJC/19.jpg',
            url: XBJCUrl + '/虚拟原理半实物仿真系统.pdf',
          },
          {
            img: '/images/XBJC/30.jpg',
            url: XBJCUrl + '/单控模块化可拆装串联机器人教程组合完整版.pdf',
          },
          {
            img: '/images/XBJC/31.jpg',
            url: XBJCUrl + '/工业机器人技术基础组合完整版.pdf',
          },
          {
            img: '/images/XBJC/32.jpg',
            url: XBJCUrl + '/模块化柔性制造综合实训系统教程组合完整版.pdf',
          },
          {
            img: '/images/XBJC/33.jpg',
            url: XBJCUrl + '/生产实践培训教程（上）组合完整版.pdf',
          },
          {
            img: '/images/XBJC/34.jpg',
            url: XBJCUrl + '/生产实践培训教程（下）组合完整版.pdf',
          },
          {
            img: '/images/XBJC/20.jpg',
            url: XBJCUrl + '/3D视觉应用技术.pdf',
          },
          // {
          //   img: '/images/XBJC/21.jpg',
          //   url: XBJCUrl + '/地面多功能工业机器人实训系统实验指导书.pdf',
          // },
          // {
          //   img: '/images/XBJC/22.jpg',
          //   url: XBJCUrl + '/工业机器人多功能多应用实训工作站实验指导书.pdf',
          // },
          {
            img: '/images/XBJC/23.jpg',
            url: XBJCUrl + '/工业机器人人工智能技术应用.pdf',
          },
          {
            img: '/images/XBJC/24.jpg',
            url: XBJCUrl + '/工业机器人数字孪生技术.pdf',
          },
          {
            img: '/images/XBJC/25.jpg',
            url: XBJCUrl + '/智能传感器技术应用（上册）.pdf',
          },
          {
            img: '/images/XBJC/26.jpg',
            url: XBJCUrl + '/智能传感器技术应用（下册）.pdf',
          },
          {
            img: '/images/XBJC/27.jpg',
            url: XBJCUrl + '/智能制造生产管理与控制（初级）.pdf',
          },
          {
            img: '/images/XBJC/28.jpg',
            url: XBJCUrl + '/智能制造数字技术应用.pdf',
          },
          // {
          //   img: '/images/XBJC/29.jpg',
          //   url: XBJCUrl + '/桌面型多功能工业机器人实训系统实验指导书.pdf',
          // },
        ],
      },
    ],
  },
  publish: {
    list: [
      {
        show: 8,
        repeatX: 4,
        width: '19%',
        title: '出版教材',
        mode: 'portrait',
        animate: 'animate__fadeInRight',
        animateFlag: 'animate',
        list: [
          {
            img: '/images/CBJC/1.jpg',
            url: 'https://item.jd.com/10069353062059.html',
            extra: true,
          },
          {
            img: '/images/CBJC/2.jpg',
            url: 'https://item.jd.com/12021366.html',
            extra: true,
          },
          {
            img: '/images/CBJC/3.jpg',
            url: 'https://item.jd.com/10041759821358.html',
            extra: true,
          },
          {
            img: '/images/CBJC/4.jpg',
            url: 'https://item.jd.com/12304840.html',
            extra: true,
          },
          {
            img: '/images/CBJC/5.jpg',
            url: 'https://item.jd.com/12156285.html',
            extra: true,
          },
          {
            img: '/images/CBJC/6.jpg',
            url: 'https://item.jd.com/12328200.html',
            extra: true,
          },
          {
            img: '/images/CBJC/7.jpg',
            url: 'https://item.jd.com/12534820.html',
            extra: true,
          },
          {
            img: '/images/CBJC/20.png',
            url: 'https://item.jd.com/10053625792789.html',
            extra: true,
          },
          {
            img: '/images/CBJC/16.png',
            url: 'https://item.jd.com/13176505.html',
            extra: true,
          },
          {
            img: '/images/CBJC/17.png',
            url: 'https://item.jd.com/71348671213.html',
            extra: true,
          },
          {
            img: '/images/CBJC/19.png',
            url: 'https://item.jd.com/10042214974468.html',
            extra: true,
          },
          {
            img: '/images/CBJC/18.png',
            url: 'https://item.jd.com/13366327.html',
            extra: true,
          },
          {
            img: '/images/CBJC/8.jpg',
            url: 'https://item.jd.com/10046337066660.html',
            extra: true,
          },
          {
            img: '/images/CBJC/9.jpg',
            url: 'https://item.jd.com/28252928419.html',
            extra: true,
          },
          {
            img: '/images/CBJC/10.jpg',
            url: 'https://item.jd.com/10050292527912.html',
            extra: true,
          },
          {
            img: '/images/CBJC/11.jpg',
            url: 'https://item.jd.com/10026222213708.html',
            extra: true,
          },
          {
            img: '/images/CBJC/12.jpg',
            url: 'https://item.jd.com/10029890274334.html',
            extra: true,
          },
          {
            img: '/images/CBJC/13.jpg',
            url: 'https://item.jd.com/10070331240209.html',
            extra: true,
          },
          {
            img: '/images/CBJC/14.jpg',
            url: 'https://item.jd.com/13065407.html',
            extra: true,
          },
          {
            img: '/images/CBJC/15.png',
            url: 'https://item.jd.com/10041574592025.html',
            extra: true,
          },
        ],
      },
    ],
  },
  teachResources: {
    list: [
      {
        id: 'book',
        show: 4,
        repeatX: 2,
        width: '38%',
        title: '课程讲义',
        animate: 'animate__fadeInLeft',
        animateFlag: 'animate',
        mode: 'portrait',
        list: [
          {
            id: 'robot',
            path: 'teachResources;book;robot',
            show: 8,
            repeatX: 4,
            width: '19%',
            title: '工业机器人',
            mode: 'portrait',
            img: '/images/JXZY/1.jpg',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                img: '/images/JXZY/01.png',
                url: JXZYUrl + '/工业机器人虚拟仿真技术课程讲义.pdf',
              },
              {
                img: '/images/JXZY/02.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（ABB）》课程讲义（初级）.pdf',
              },
              {
                img: '/images/JXZY/04.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（ABB）》课程讲义（中级）.pdf',
              },
              {
                img: '/images/JXZY/03.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（ABB）》课程讲义（高级）.pdf',
              },

              {
                img: '/images/JXZY/05.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（FANUC）》课程讲义（初级）.pdf',
              },
              {
                img: '/images/JXZY/06.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（FANUC）》课程讲义（中级）.pdf',
              },
              {
                img: '/images/JXZY/07.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（汇博）》课程讲义（初级）.pdf',
              },
              {
                img: '/images/JXZY/08.png',
                url:
                  JXZYUrl +
                  '/《工业机器人应用编程（汇博）》课程讲义（中级）.pdf',
              },
            ],
          },
          {
            id: 'production',
            path: 'teachResources;book;production',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '智能制造',
            mode: 'portrait',
            img: '/images/JXZY/2.jpg',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                img: '/images/JXZY/09.png',
                url:
                  JXZYUrl + '/《智能制造生产管理与控制》课程讲义（初级）.pdf',
              },
              {
                img: '/images/JXZY/10.png',
                url:
                  JXZYUrl + '/《智能制造生产管理与控制》课程讲义（中级）.pdf',
              },
            ],
          },
          {
            id: 'vision',
            path: 'teachResources;book;vision',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '机器视觉',
            mode: 'portrait',
            img: '/images/JXZY/3.jpg',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [],
          },
          {
            id: 'digitalTwin',
            path: 'teachResources;book;digitalTwin',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '数字孪生',
            mode: 'portrait',
            img: '/images/JXZY/4.jpg',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [],
          },
        ],
      },
      {
        id: 'video',
        show: 4,
        repeatX: 2,
        width: '38%',
        title: '课程视频',
        mode: 'portrait',
        animate: 'animate__fadeInRight',
        animateFlag: 'animate',
        list: [
          {
            id: 'robot',
            img: '/images/JXZY/videoImg/工业机器人/一级--工业机器人.jpg',
            path: 'teachResources;video;robot',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '工业机器人',
            mode: 'portrait',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                id: 'ABB',
                img: '/images/JXZY/videoImg/工业机器人/二级--工业机器人应用编程(ABB).jpg',
                path: 'teachResources;video;robot;ABB',
                show: 4,
                repeatX: 4,
                width: '20%',
                height: '65%',
                title: 'ABB机器人',
                mode: 'portrait',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    id: 'Primary',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（ABB）初级.jpg',
                    path: 'teachResources;video;robot;ABB;Primary',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: 'ABB初级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.1.3.1  系统上电操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.1.3.2  机器人关机演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.1.7 示教器语言环境设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.1.8 机器人的急停与恢复演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.2.5 .1   关节坐标系下1-3轴的手动操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.2.5.2  关节坐标系下4-6轴的手动操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.3.1  大地坐标系介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.3.2  手动大地坐标系XYZ方向操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.3.3  手动大地坐标系绕XYZ方向旋转操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.4.3手动工具坐标系操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目1 工业机器人手动操作/任务1.4.4笔筒对其练习演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.1 激光切割操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.1.3  快换气路系统介绍及功能演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.1.4  可编程按键介绍及演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.1.7  绘图模块的安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.1.8  系统恢复演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.2 加载和运行激光切割程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.2.1   程序指针介绍与程序加载及指针设定演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.2.3   点位修改操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.2.5   程序运行演示视频.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3 编制激光切割运动程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.1   任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.2   MOVE C指令的介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.3   MOVE J,MOVEABSJ指令介绍与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.4   MOVE J与MOVE L的比较.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.5   MOVE L指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.6   激光切割程序编辑与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.3.7   激光切割轨迹与运动指令分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.4 备份程序及系统.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.4.1   系统备份命名规则.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.4.3   程序导出演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目2 工业机器人激光切割/任务2.4.4   系统备份演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/3.1.1  程序设计操作演示与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1 总结.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.2.1  Set指令说明及操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.2.2  reset指令说明及操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.3  waittime指令说明演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.4  ZoneData参数说明演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.5  焊枪工具自动拾取轨迹规划与程序设计分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.6  自动拾取焊枪工具任务说明及演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1.7   程序设计操作演示与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.1自动拾取焊枪工具视频课程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2  总结.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.1.1 标定焊枪工具任务简述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.1.2 工具数据定义.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.2 工具数据的定义方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.3 工具数据说明与创建演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.4 工具数据标定演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2.5 工具数据验证演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.2标定焊枪工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3 工业机器人模拟焊接视频课程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.1 RAPID语言介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.2.1 RAPID数据介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.2.2 num变量创建演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.3 程序结构介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.4 Proccall介绍和程序添加.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.5 焊接轨迹分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.6.1 焊接轨迹示教编程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.6.2 焊接主程序编辑演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目3 工业机器人模拟焊接/任务3.3.7 焊接程序创建及运行演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.1 工具负载测算.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.1  夹爪工具介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.2 夹爪工具的辅助标定工具工具介绍与安装使用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.3 工具坐标系的标定演示与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.4 工具负载测算演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2 电机部件搬运应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2.1 电机搬运流程分析与程序规划.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2.2 SetDO指令介绍与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2.3 offs函数介绍与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2.5 电机搬运程序编辑与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.2.6 电机搬运程序优化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3 棋盘格搬运应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.1  棋盘格搬运流程介绍演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.2  模块的电气安装介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.3  井室供料模块的介绍与控制程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.4  吸盘工具介绍与控制程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.5  WaitDI指令的介绍与编程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目4 工业机器人搬运应用/任务4.3.7  棋盘格搬运程序编写与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1 重叠式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.1  码垛定义及重叠式垛型介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.2.1  For指令直接介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.2.2  For指令的添加和编程应用演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.3.1  表达式介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.3.2  运算符介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.3.3  函数运算介绍及offs函数操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.1  重叠式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.2  重叠式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.3 重叠式码垛工件拾取位置计算程序优化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.4  重叠式码垛工件放置位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.7  重叠式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.8  重叠式码垛关键点位示教及运行验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2 交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.1.1  IF指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.1.2  IF指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.2.1  GOTO指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.2.2  GOTO指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.1  纵横交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.2  纵横交错式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.3  纵横交错式码垛工件放置位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.4  纵横交错式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.5  纵横交错式码垛关键点位示教及运行验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3 旋转交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.1.1  WHILE指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.1.2   WHILE指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.1.3  WHILE特殊用法：无限循环.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.2.1  TSET指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.2.2  TEST指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.3.1  计时指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.3.2  计时指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.4.1  旋转交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.4.2  旋转交错式码垛工件拾取与码垛位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.5  旋转交错式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.6  旋转交错式码垛关键点位试教及运行验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1  工件坐标系标定及绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.1  直接输入法标定工具坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.2  工件坐标系介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.4.1  工件坐标系的创建及标定演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.4.2  工件坐标系验证演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.5.1  坐标系在程序中的调用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.5.2  工件坐标系下绘图程序的编写操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.1.5.3  在新工件坐标系下完成图形的复制编程操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2  基于工件坐标系变换的绘图视频课程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2.1.1  对准功能介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2.1.2  对准功能操作演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2.2  工件数据介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2.3  6点法标定工件坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.2.4  Oframe参数进行坐标系变换的绘图程序编写操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目6 工业机器人绘图应用/任务6.3  使用坐标转换指令绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1 智能仓储应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1.2  智能仓储模块介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1.3.1  数组型变量的介绍及数值型数组的复制操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1.3.2 找物料的仓位查找程序设计与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1.3.3  随机库位物料出库准备程序设计与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.1.4 物料出库程序的编写与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.2 变位机控制与应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.2.2  变位机模块介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.2.3.1  变位机控制变量介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.2.3.2  变位机状态变量介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.3 电机装配编程应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.3.1  电机装配流程分析与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目7 工业机器人电机装配/任务7.3.4  电机装配综合流程程序讲解与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1 旋转供料单元控制及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.1  旋转供料单元介绍及任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.2.1  旋转供料单元控制变量说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.2.2  旋转供料单元控制变量的创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.1  旋转供料单元控制变量初始化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.2  旋转供料单元使能程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.3  旋转供料单元寻原点命令及运行确认程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.4  旋转供料单元寻原点程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.1  旋转供料单元电机部件抓取的流程说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.2  旋转供料单元相对位移运动控制程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.3  旋转供料单元库位检测逻辑程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.4  旋转供料单元电机部件机器人抓取程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.5  旋转供料单元电机部件供料程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.6  旋转供料单元电机部件抓取及装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.7  工业机器人完成关节装配完整流程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2 上料输送单元控制及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.1.1  上料输送单元介绍和任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.1.2  上料输送单元信号变量介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.1  减速机供料和输送程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.2  减速机抓取程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.3  减速机装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.4  减速机输送和装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.1  输出法兰搬运和装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.2  输出法兰输送和装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.3  变位机复位，吸盘工具放回程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.4  吸盘放回，成品入库程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.4.1  成品入库程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.2.4.2  成品入库程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3  关节装配综合应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.1.1  带参数例行程序说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.1.2  带参数例行程序的创建演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.1.3  PickToPut例行程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.2  工业机器人关节装配流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.3  工业机器人关节装配输入输出信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.4  工业机器人关节装配关键示教点说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.5.1  工业机器人关节装配综合流程程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）初级》配套视频/项目8 工业机器人关节装配/任务8.3.5.2  工业机器人关节装配综合流程程序验证.mp4',
                        video: true,
                      },
                    ],
                  },
                  {
                    id: 'Middle',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（ABB）中级.jpg',
                    path: 'teachResources;video;robot;ABB;Middle',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: 'ABB中级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.1.1  Socket通信介绍及机器人端socket指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.1.2  机器人socket客户端的创建与调试实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.2.1  RawBytes数据类型及打包解包介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.2.2  RawBytes数据类型及打包解包指令使用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.2.3  ABB机器人通讯程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/1.1.2.4  ABB机器人通讯程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.3.1  PLC端的硬件组态及数据接口创建实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.3.2  PLC服务器程序及数据解析程序设计编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.3.3  PLC服务器的创建及与机器人间的数据解析规则.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.3.4  PLC与机器人的数据接口介绍及硬件组态介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.4.1  ABB 机器人“多任务”介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.4.2  ABB 机器人“多任务”创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.4.3  ABB机器人端的接口数据创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.1.4.4  ABB机器人端的接口数据规划.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.2  立体仓库工件信息查询.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.2.1  智能仓储介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.2.2  智能仓储单元设置与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.2.3  智能仓储单元程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.3  旋转供料应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.3.1  旋转供料步进系统介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.3.2  旋转供料安装与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.3.3  旋转供料控制程序设计与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4 工业机器人电机装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4.1  任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4.2  知识准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4.3  任务实施-程序讲解验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4.4  拓展练习.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目1 工业机器人装配综合应用/任务1.4.5  程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1 RFID设备PLC端编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.1 技术介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.2 系统组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.3 RFID指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.4 工艺设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.5 PLC端RFID接口说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.1.6 PLC端编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.2 RFID设备机器人端编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.2.1 机器人端RFID接口说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.2.2 机器人端RFID编程操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3 变位机控制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3.1 Modbus RTU通讯说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3.2 变位机设备系统组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3.3 PLC端指令介绍及编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3.4 机器人端接口及编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.3.5编程调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.4 电机装配流程及产品追溯.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.4.1 产品追溯功能设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目2-工业机器人RFID应用/任务2.4.2 实际生产中的产品追溯应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1 视觉模块安装与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.1 工业视觉系统概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.2 工业视觉系统组成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.3 工业视觉主要参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.4 工业视觉的典型应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.5 安装视觉模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.6 调整视觉参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.1.7 测试视觉数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2-工业机器人与相机通信.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.1 a任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.1 Socket指令实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.1 Socket通信相关指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.2 通信程序流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.3 相机通信任务配置实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.3 配置相机通信任务.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.4 Socket及其变量创建实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.4 创建Socket及其变量.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.5 编写相机通信程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.2.5 编写相机通信程序实操演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3 关节装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3.1关节装配程序流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3.2 关节装配工件准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3.3 输出法兰位置示教.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目3-工业机器人视觉检测装配/任务3.3.4 关节装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1 相机安全区域的设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1.1 全局区域监控概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1.2 全局区域监控数据类型.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1.3 全局区域监控指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1.4 创建区域监控变量.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.1.5 设置相机安全区域.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2-工件形状和颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.1相机标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.2颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.3形状识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.4实际尺寸与像素比标定含实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.5工件形状的学习含实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.6获取工件形状及位置数据含实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.7工件颜色学习含实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.2.8获取工件颜色数据含实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3 基于视觉识别的工件分拣.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3.1工件识别分拣流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3.2 工件抓取编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3.3工件码垛编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目4-工业机器人视觉分拣/任务4.3.4  工件识别分拣主程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.1 io模块及信号配置5.18.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.1.1 DeviceNet总线.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.1.2 DeviceNet设备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.1.3 扩展IO模块的连接设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.1.4 数字IO信号的创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.2 机器人称重模块标定及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.2.1 模拟量信号及标定方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.2.2 模拟量信号创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.2.3 模拟量输入信号的标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3 机器人中断应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3.1 中断的概念.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3.2 中断相关指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3.3 机器人高级运动指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3.4 中断处理程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.3.5 中断触发程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.4.1产品定制工作站程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.4.2视觉系统应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.4.3HMI及PLC应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.4.4 机器人程序编程及系统调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目5 工业机器人产品定制/任务5.4工业机器人产品定制应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目6-工业机器人喷涂应用离线编程/任务6.1  模型导入及布局.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目6-工业机器人喷涂应用离线编程/任务6.2  配置模型参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目6-工业机器人喷涂应用离线编程/任务6.3 创建与设定动态喷涂组件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目6-工业机器人喷涂应用离线编程/任务6.4工业机器人喷涂程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目7-工业机器人写字应用离线编程/任务7.1  写字路径生成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目7-工业机器人写字应用离线编程/任务7.2写字路径优化与仿真运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目7-工业机器人写字应用离线编程/任务7.3写字应用验证调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）中级》配套资源/配套视频/项目7-工业机器人写字应用离线编程/任务7.4演示视频.mp4',
                        video: true,
                      },
                    ],
                  },
                  {
                    id: 'Senior',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（ABB）高级.jpg',
                    path: 'teachResources;video;robot;ABB;Senior',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: 'ABB高级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.1知识准备1环境（外部轴系统配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.2知识准备2外部轴配置文件（外部轴系统配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.3知识准备3机械参数（外部轴系统配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.4知识准备4连锁信号（外部轴系统配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.5&6任务实施  直线轴（外部轴系统参数配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.1.5&7任务实施  旋转轴（外部轴系统参数配置）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.2.1知识准备（直线轴校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.2.2&3任务实施（直线轴校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.2.4任务实施  动作验证（直线轴校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.3.1知识准备（旋转轴的校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.3.2任务实施  构型加校准（旋转轴的校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.3.4任务实施  验证（旋转轴的校准与验证）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.4.1&2知识准备 MoveExtJ介绍加使用（外部轴协调装配）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.4.3知识准备  Multimove（外部轴协调装配）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.4.4任务实施  程序设计（外部轴协调装配）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目1-工业机器人外部轴协调装配/任务1.4.5任务实施  程序编写（外部轴协调装配）.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.1.1机械装置的概念及配置方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.1.2 选项MultiMove的功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.1.3工搭建多本体系统仿真布局.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.1.4创建外部轴机械装置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.1.5创建多本体机器人系统.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.2.1 多本体系统的控制原理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.2.2 多本体系统的标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.2.3添加外部轴到控制系统.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.2.4配置外部轴参数与联锁信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.2.5双本体标定及动作验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.1 Multimove指令及数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.2 联动与半联动状态的动作特征及程序结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.3 弧焊指令功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.4焊接功能设置及数据创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.5半联动焊接程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.3.6联动焊接程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.4.1弧焊smart组件设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.4.2弧焊smart组件制作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目2-工业机器人多轴协调焊接/任务2.4.3联动焊接仿真程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.1 二次开发环境配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.2 PCSDK类的概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.3 项目运行环境.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.5 创建工程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.6 用户界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.7 获取网络控制器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.1.8 实现控制器连接.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.2.1~4 知识准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.2.2设计数据映射程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.2.6 获取IO信号及映射.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.2.7 控制器机器人程序运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.2.8获取机器人关节数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.3.1机器人工程环境.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目3-基于.NET上位机二次开发/任务3.3.3上位机功能调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1 项目引入.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.1 SMART组件介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.2 Smart组件开发.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.3 工作站准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.4工具的Smart组件设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.5 进料输送带Smart组件设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.6 出料输送带Smart组件设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.1.7 工作站信号配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.2 程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.1 ScreenMaker介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.10 目部署测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.2 ScreenMaker开发环境.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.3 GUI控件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.4FlexPendant SDK下载安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.5 创建ScreenMaker项目.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.6 主画面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.7 码垛参数画面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.8 其他画面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目4-示教器码垛应用窗口开发/任务4.3.9 监控画面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.1.1 汇博虚拟调试平台概述.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.1.2 虚拟调试系统环境配置.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.1.3 虚拟调试系统参数设置.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.1.4 电机装配仿真工作站搭建.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.2.1 Python与redis交互.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.2.2 数据驱动模型.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.2.3 机器人驱动程序编程与测试.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.2.4 变位机驱动程序编程与测试.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.2.5 旋转供料机构驱动程序编程与测试.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.3.1电机装配虚拟调试流程.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.3.2 电机装配虚拟调试准备工作.m4v',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（ABB）高级》配套视频/项目5-工业机器人虚拟调试/任务5.3.3 电机装配虚拟调试与验证.m4v',
                        video: true,
                      },
                    ],
                  },
                ],
              },
              {
                id: 'FANUC',
                img: '/images/JXZY/videoImg/工业机器人/二级--工业机器人应用编程(FANUC).jpg',
                path: 'teachResources;video;robot;FANUC',
                show: 4,
                repeatX: 4,
                width: '20%',
                height: '65%',
                title: 'FANUC机器人',
                mode: 'portrait',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    id: 'Primary',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（FANUC）初级.jpg',
                    path: 'teachResources;video;robot;FANUC;Primary',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: 'FANUC初级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1 工业机器人手动操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.1常用安全护具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.2 机器人组成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.3 开关机介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.4 急停介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.5 穿戴安全护具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.6 开机步骤.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.7 配置示教器参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.8 紧急停止按钮测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.1.9关机操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.2 手动关节坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.2.1 示教盒操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.2.2 坐标系介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.2.3 操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.2.4 坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3 手动大地坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3.1 大地坐标系介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3.2 速度设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3.3 切换坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3.4 操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.3.5 坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.4 手动工具坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.4.1 工具坐标系介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.4.2 工具坐标系操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.4.3 工具坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目1 工业机器人手动操作/任务1.4.4 工具坐标系对齐笔筒操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.1 激光切割操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.1.3 气动控制板.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.1.7 通用机械接口.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.2 加载和运行激光切割程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.2.1 程序指针.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.2.3 程序指令修改点位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.2.5 手动运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.2.6程序创建、加载.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3 编制激光切割运动程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.1 Cric指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.2 Lin指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.3 指令比较.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.4 PTP指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.5 程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.6 激光切割轨迹与运动指令分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.3.7 参数修改.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目2 工业机器人机关切割/任务2.4 程序备份.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目3 工业机器人激光切割/任务3.1 自动拾取焊枪工.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目3 工业机器人激光切割/任务3.2 工具坐标系创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目3 工业机器人激光切割/任务3.3 工业机器人模拟焊接.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.1 辅助工具和工具坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.1 示教器放正夹持辅助工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.2 工具介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.1.3 工具坐标系的标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.2 电机部件搬运应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目4 工业机器人搬运应用/任务4.3 三个圆搬运.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1 重叠式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.0 重叠式码垛任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.1 码垛定义及重叠式垛型介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.2.1 FOR指令直接介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.2.2 FOR指令的添加和编程应用演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.3 表达式介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.1 重叠式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.2 重叠式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.4.3 重叠式码垛工件放置位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.1.5 重叠式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2 纵横交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.0 纵横交错式码垛任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.1.1 IF指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.1.2 IF指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.2.1 JMP指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.2.2 JMP指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.1 纵横交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.2 纵横交错式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.3.3 纵横交错式码垛工件放置位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.2.4 纵横交错式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3 旋转交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.0 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.1.1 select指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.1.2 select指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.2.1 计时指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.2.2 计时指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.3.1 旋转交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.3.2 旋转交错式码垛工件拾取与码垛位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.3.4 旋转交错式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4 Fanuc码垛指令应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.0 Fanuc码垛指令应用任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.1.1 码垛堆积的种类.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.1.2 码垛堆积指令结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.2.1 码垛堆积指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.2.2 添加码垛堆积指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.3.1 程序流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.3.2 工件的拾取.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.3.3 工件的放置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目5 工业机器人码垛应用/任务5.4.4 码垛程序试教编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目6 工业机器人绘图应用/任务6.1 工件坐标系的标定及绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目6 工业机器人绘图应用/任务6.2 坐标系偏移绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目6 工业机器人绘图应用/任务6.3 使用偏移条件指令绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目7 工业机器人电机装配/任务7.1 智能仓储应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目7 工业机器人电机装配/任务7.2 变位机操作与应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目7 工业机器人电机装配/任务7.3 变位机控制与应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目7 工业机器人电机装配/任务7.3.1 FANUC流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目7 工业机器人电机装配/任务7.3.2 FANUC程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1 旋转供料单元控制及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.1 机器人关节电机装配完整流程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.2 旋转供料单元介绍及任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.1 旋转供料单元控制变量说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.3.2 旋转供料单元控制变量交互方式说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.1 旋转供料单元控制变量初始化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.2 旋转供料单元使能程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.3 旋转供料单元寻原点命令及运行确认程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.4.4 旋转供料寻原点程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.1 取出平口手抓工具程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.2 旋转供料单元电机零件工业机器人抓取程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.3 旋转供料单元库位检测逻辑程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.4 旋转供料单元相对位移控制程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.5 旋转供料单元电机零件供料程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.6 旋转供料模块上电机零件抓取的流程说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.7 旋转供料库位电机零件抓取及装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.1.5.8 平口手抓工具放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2 上料输送单元控制及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.1.1 任务介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.1.2 完整流程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.1 上料输送单元介绍及任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.2.2 上料输送单元信号变量介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.1 减速机的供料和运输程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.2 减速机抓取和装配程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.3 吸盘工具抓起程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.3.4 减速机输送与装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.4.1 输出法兰抓取和装配程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.4.2 输出法兰装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.4.3 吸盘工具放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.5.1 弧口手抓取出程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.5.2 成品入库程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.5.3 成品入库程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.2.5.4 弧口手爪放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3 关节装配综合应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.1 任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.2 工业机器人关节装配流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.3 工业机器人关节装配输入输出信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.4 工业机器人关节装配关键示教点说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.5.1 工业机器人关节装配综合流程程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）初级》配套视频/项目8 工业机器人关节装配/任务8.3.5.2 工业机器人关节装配综合流程程序验证.mp4',
                        video: true,
                      },
                    ],
                  },
                  {
                    id: 'Middle',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（FANUC）中级.jpg',
                    path: 'teachResources;video;robot;FANUC;Middle',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: 'FANUC中级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1 PLC和工业机器人数据通信-总.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.1 TCPIP通信指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.3 PLC通信编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.4 PLC与工业机器人通信测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2 立体仓库应用编程-总.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.3立体仓库介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.4立体仓库设置与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.5立体仓库程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3 旋转供料应用编程-总.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.1旋转供料步进系统介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.3旋转供料安装与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.5旋转供料控制程序设计与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4 电机装配应用编程-总.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.1电机装配程序流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.2电机装配IO信号表.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.4 机器人参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.5 创建宏程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.7 工业机器人电机装配编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1 RFID模块安装测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.1RFID技术概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.5组态RFID模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.6 PLC与RFID通信编程与测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2  工业机器人与RFID信息交互.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.1 RFID工序信息设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.2 RFID接口设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.3 机器人对RFID数据读写编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.5 机器人对RFID数据读写测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3 工业机器人对变位机的应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.2 Modbus通信.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.5通信模块组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.6 PLC与伺服驱动器通信编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.8 机器人对变位机控制测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.4 电机装配流程及产品追溯.MP4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.4.4 HMI界面数据解析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.4.6 电机装配追溯应用编程.MP4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1 视觉模块安装调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.1 工业视觉系统概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.2 工业视觉系统组成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.3 工业视觉主要参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.4 工业视觉系统典型应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.5 安装视觉模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.6 调整相机参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2 输出法兰形状与位置识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.1 相机软件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.2 形状识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.3 视觉定位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.4 输出法兰定位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.5 输出法兰形状的识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3 PLC与相机通信编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.1 康耐视相机GSD文件安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.2 康耐视相机通信接口.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.3 相机通信设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.4 相机及周边系统组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.5 PLC与相机通信测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.6机器人控制相机拍照及接收数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4 基于视觉定位的关节装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.1 基于视觉的工件定位抓取.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.2 基于视觉定位的关节装配流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.3 工件准备与关键目标点示教.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.4 关节装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.1 相机安全区域设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.1.1 防干涉区域功能及参数设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.1.2 相机安全区域设定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.1.3 测试相机安全区域功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2 减速器形状与颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2.1 相机标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2.2 颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2.3 减速器形状识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2.4 减速器颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.2.5 减速器实际尺寸与像素比标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.3 工件位置和颜色的识别与显示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.3.1相机通信程序与测试界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.3.2编写PLC与相机通信程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.3.3HMI 相机测试界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.3.4相机通信与工件识别测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.4 工件识别与分拣应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.4.1基准位置偏移法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.4.2工件识别与分拣程序流程设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.4.3HMI视觉分拣应用界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目4 工业机器人视觉分拣应用/任务4.4.4基于视觉的工件分拣程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.1 知识技能点短视频.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.1.4 扩展IO模块的连接设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.1.5 数字IO信号的配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.2 机器人称重模块标定及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.2.1 组输入输出信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.2.2 模拟量信号及标定方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.2.4 基于称重的工件分拣.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3 输送带调速及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3.3 调速器模拟量控制设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3.4 模拟量输出信号的标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3.5 后台逻辑的标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3.6 输送带控制程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4 产品定制工作站编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.2 视觉系统应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.3 HMI及PLC的应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.4 机器人程序编写及系统联调.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.1 写字工作站搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2 写字离线编程与仿真运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3 写字离线程序调试与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.1 工作站搭建及参数配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.1.1 认识关节装配仿真工作站.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.1.2 模型参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.1.3 关节装配仿真工作站搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.1.4 关节部件参数配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.2 运动机构创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.2.1 虚拟电机驱动法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.2.2 创建变位机运动机构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.2.3 运动机构控制及状态反馈测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.3 关节装配仿真设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.3.1 对象移动仿真机制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.3.2 快换工具仿真设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.3.3 关节部件仿真设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4 关节装配离线编程与视频录制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4.1 仿真程序概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4.2 视频录制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4.3 关节装配流程与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4.4 关节装配离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（FANUC）中级》配套视频/项目7 工业机器人关节装配离线编程/任务7.4.5 仿真运行与视频录制.mp4',
                        video: true,
                      },
                    ],
                  },
                ],
              },
              {
                id: 'HuiBo',
                img: '/images/JXZY/videoImg/工业机器人/二级--工业机器人应用编程(汇博).jpg',
                path: 'teachResources;video;robot;HuiBo',
                show: 4,
                repeatX: 4,
                width: '20%',
                height: '65%',
                title: '汇博机器人',
                mode: 'portrait',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    id: 'Primary',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（汇博）初级.jpg',
                    path: 'teachResources;video;robot;HuiBo;Primary',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: '汇博机器人初级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1 工业机器人操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.1 常用安全护具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.2 工业机器人系统组成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.3.1  工业机器人开机步骤.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.3.2  工业机器人关机步骤.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.4 紧急停止按钮.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.7 示教盒环境参数配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.1.8紧急停止测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.2 手动关节坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.3 手动大地坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目1-工业机器人手动操作/任务1.4 手动工具坐标系操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.1 激光切割操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.1.3 气动控制板.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.1.7 平面绘图模块安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.2 加载和运行激光切割程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.2.1 程序指针.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.2.3 程序指令修改点位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.2.5 手动运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.2.6 程序创建、加载.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3 编制激光切割运动程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.1Cric指令的介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.2 Lin指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.3 PTP与LIn的比较.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.4 PTP指令介绍与演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.5 封闭轨迹程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.6 激光切割程序编辑与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.7 激光切割轨迹与运动指令分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.3.8 参数修改.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.4 程序备份.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目2-工业机器人激光切割/任务2.4.4 导出程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1 自动拾取焊枪工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.1焊接基本概况.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.2 赋值指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.3 waittime指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.4 waitfinished 指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.5 规划拾取工具轨迹.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.6 编写拾取工具程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.1.7 手动模式调试拾取工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2 工具坐标系创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2.1 tool指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2.2 工具坐标系定义方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2.3 创建工具坐标变量.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2.4 标定工具数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.2.5 验证工具数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3 机器人模拟焊接.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.1 KAIRO语言.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.2 项目结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.3 Call指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.4 规划焊接工件轨迹.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.5 编写模拟焊接程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目3-工业机器人模拟焊接/任务3.3.6 自动运行模拟焊接程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.1 工具坐标系的创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.1.1 辅助标定工具的使用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.1.2 标定直口夹爪工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2 电机部件搬运应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.1 电机搬运路径规划.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.2 BOOLSIGOUT指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.3 LinRel函数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.4 设计搬运程序结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.5 编写搬运程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.2.6 优化搬运程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3 棋盘格搬运应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.1棋盘格搬运模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.2模块电气安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.3 推料气缸控制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.4 吸盘工具控制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.5 WAIT指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.6 棋盘格搬运流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目4-工业机器人搬运应用/任务4.3.7 编写棋盘格搬运程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1 重叠式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.0 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.1 码垛定义及垛型.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.2 LOOP指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.3 .1 表达式介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.3.2 函数运算介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.3.3 运算符介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.4.1 重叠式码垛工件放置位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.4.2 重叠式码垛工件拾取位置计算程序优化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.4.3 重叠式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.4.4 重叠式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.5 编写重叠式码垛程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.1.6 记录取放位置数据 重叠式码垛关键点位示教及运行验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2 纵横交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.0 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.1.1 IF指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.1.2 IF指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.2.1 GOTO指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.2.2 GOTO指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.3.1 纵横交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.3.2纵横交错式码垛工件拾取位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.4 编写纵横交错式码垛程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.2.5 记录取放位置数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3 旋转交错式码垛.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.0 任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.1.0 WHILE指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.1.2 WHILE特殊用法：无限循环.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.1.3 WHILE指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.3.1 计时指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.3.2 计时指令示例程序编辑演示及讲解.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.4.1 旋转交错式码垛流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.4.2 旋转交错式码垛工件拾取与码垛位置计算算法分析与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.5 旋转交错式码垛程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.3.6 旋转交错式码垛关键点位试教及运行验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4  码垛工艺包应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.0任务提出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.1 码垛包工艺.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.2 码垛指令及变量.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.3 基于码垛工艺的程序流程设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.4 设计码垛流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.5 拆垛参数设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.6 码垛参数设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目5-工业机器人码垛应用/任务5.4.7 码垛程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.1  对象坐标系标定4.24.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.1.1  工具坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.1.2  对象坐标系.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.1.3 工具坐标系设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.1.4 对象坐标系设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.2 坐标系的切换及绘图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.2.1工具坐标系的应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.2.2对象坐标系的应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.2.3坐标系的切换.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.2.4编写绘图程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.3 坐标系偏移.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.3.1对齐功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.3.2用户坐标系的偏移.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.3.3 工具手垂直方向对齐操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目6-工业机器人绘图应用/任务6.3.4 编写基于对象坐标系偏移的绘图程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1 智能仓储应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.2  智能仓储数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.1数组型变量的介绍及数值型数组的赋值操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.2 随机库位物料出库准备程序设计与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.3 随机库位物料入库准备程序设计与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.4 物料仓位查找程序的设计与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.5 物料仓位对应位置示教记录.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.1.3.7 物料入库程序的编写与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.2 变位机控制与应用1.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目7-工业机器人电机装配/任务7.3 变位机控制与应用2.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1  旋转供料单元控制与应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.0完整流程演示视频.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.1 旋转供料单元介绍及任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.2.1 旋转供料单元控制变量说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.2.2 旋转供料单元控制变量交互方式说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.3.1 旋转供料单元控制变量初始化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.3.2 旋转供料单元使能程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.3.3 旋转供料单元寻原点命令及运行确认程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.3.4 旋转供料寻原点程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.1 平口手抓工具放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.2 取出平口手抓工具程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.3 旋转供料单元电机零件工业机器人抓取程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.4 旋转供料单元电机零件供料程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.5 旋转供料单元库位检测逻辑程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.6 旋转供料单元相对位移控制程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.7 旋转供料库位电机零件抓取及装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.1.4.8 旋转供料模块上电机零件抓取的流程说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2 上料输送单元控制及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.0.0 任务介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.0.1完整流程演示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.1.1 上料输送单元介绍及任务说明.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.1.2 上料输送单元信号变量介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.2.1吸盘工具抓起程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.2.2 减速机抓取和装配程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.2.3 减速机输送与装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.2.4 减速机的供料和运输程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.3.1输出法兰抓取和装配程序的编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.3.2 输出法兰装配程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.3.3 吸盘工具放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.4.1 成品入库程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.4.2 成品入库程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.4.3 弧口手爪放回程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.2.4.4 弧口手抓取出程序验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3 关节装配综合应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3.1 关节装配流程分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3.2 关节装配输入输出信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3.3 关节装配位置示教.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3.4.1 工业机器人关节装配综合流程程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）初级》配套视频/项目8-工业机器人关节装配/任务8.3.4.2 工业机器人关节装配综合流程程序验证.mp4',
                        video: true,
                      },
                    ],
                  },
                  {
                    id: 'Middle',
                    img: '/images/JXZY/videoImg/工业机器人/三级--工业机器人应用编程（汇博）中级.jpg',
                    path: 'teachResources;video;robot;HuiBo;Middle',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: '汇博机器人中级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1  PLC和工业机器人数据通信.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.1 TCPIP通信指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.3-1 PLC硬件组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.3-2 创建通信数据块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.3-3 PLC通信编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.1.4 PLC与工业机器人通信测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2 立体仓库应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.1立体仓库介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.4立体仓库设置与程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.2.5立体仓库程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3 旋转供料应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.1步进系统介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.4旋转供料安装与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.3.5旋转供料控制程序设计与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4 电机装配应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.1 电机装配程序流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.4功能函数使用示例.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.6-1电机装配程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目1 工业机器人装配应用编程/任务1.4.6-2电机装配程序调试与验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1 RFID模块安装测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.1RFID技术概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.5组态RFID模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.1.6PLC与RFID通信编程与测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2 工业机器人与RFID信息交互.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.1-1RFID工序记录算法介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.1-2RFID 数据接口及定义.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.2-1RFID PLC部分程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.2-2机器人对RFID数据读写编程设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.2.3 机器人对RFID数据读写测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3 基于RFID的电机装配追溯.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.4 HMI界面数据解析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目2 工业机器人产品追溯应用编程/任务2.3.7 电机装配追溯应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1 视觉检测模块安装调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.1 工业视觉概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.2 工业视觉系统组成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.3 工业视觉主要参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.4  工业视觉典型应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.5  安装视觉模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.6 调整视觉参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.1.7 测试视觉数据.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2 输出法兰形状与位置识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.1 相机软件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.2 形状识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.3 视觉定位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.4 输出法兰定位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.2.5 输出法兰形状的识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3 PLC与相机通讯编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.1 康耐视相机GSD文件安装.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.2康耐视相机的通信接口.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.3相机通信设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.4 相机及周边系统组态.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.5 PLC与相机通信测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.3.6 相机拍照及数据接收.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4 基于视觉定位的关节装配应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.1 基于视觉的工件定位抓取.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.2 基于视觉定位的关节装配流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.3工件准备与关键目标点的示教.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目3 工业机器人视觉检测装配/任务3.4.4 关节装配程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.1 相机安全区域设定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.1.1 区域监控功能及设定界面.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.1.2 区域监控指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.1.3 相机安全区域设定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.1.4 测试区域监控功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2 减速器形状与颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2.1 相机标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2.2 颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2.3 减速器形状识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2.4 减速器颜色识别.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.2.5 减速器实际尺寸与像素比标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.3 工件位置和颜色的识别与显示.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.3.1相机通信程序与测试界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.3.2编写PLC与相机通信程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.3.3HMI 相机测试界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.3.4相机通信与工件识别测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.4 工件识别与分拣应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.4.1 基准位置偏移法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.4.2 工件识别与分拣程序流程设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.4.3 HMI 视觉分拣应用界面设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目4-工业机器人视觉分拣应用/任务4.4.4 基于视觉的工件分拣程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.1 基于称重的工件分拣.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.2 输送带的调速标定及应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.3 并行程序及组输入输出的应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4 产品定制工作站应用编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.1 产品定制工作站程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.2 视觉系统应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.3 PLC程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.4-1 画面模板创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.4-2 产品定制HMI程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目5 工业机器人产品定制应用编程/任务5.4.5 机器人程序编写与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.1 写字工作站搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.1.1 认识写字工作站模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.1.2 写字工作站模型导入与布局.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2  写字轨迹离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2.1 CAM软件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2.2 G代码介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2.3 写字轨迹编程准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2.4 写字轨迹编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.2.5 写字轨迹G代码导出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3 写字离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.1 示教编程与离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.2 RobotDK离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.3 机器人后处理程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.4 写字离线编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.5 写字仿真程序优化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.3.6 写字离线程序生成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4 写字离线程序调试及验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4.1 WinSCP与机器人建立连接.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4.2 机器人程序的导入与导出.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4.3 写字离线程序导入机器人控制器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4.4 写字工具和对象坐标系标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目6 工业机器人写字应用离线编程/任务6.4.5 工业机器人写字应用调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.1.1  创建机器人和机构功能.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.1.2  创建工业机器人外部轴.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.1.3  创建变位机机构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.1.4  配置工业机器人外部轴.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.2.1 认识焊接仿真工作站.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.2.2  焊接仿真工作站搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.3.1  Program编程方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.3.2  焊接仿真程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.3.3  焊接目标点示教.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.3.4  焊接仿真程序编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.4.1  RoboDK API.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.4.2  Python API常用指令介绍.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.4.3  焊缝效果编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《工业机器人应用编程（汇博）中级》配套视频/项目7 工业机器人焊接应用离线编程/任务7.4.4  焊接仿真程序优化.mp4',
                        video: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'intelligent',
            img: '/images/JXZY/videoImg/智能制造/一级--智能制造.jpg',
            path: 'teachResources;video;intelligent',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '智能制造',
            mode: 'portrait',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                id: 'production',
                img: '/images/JXZY/videoImg/智能制造/二级--智能制造生产管理与控制.jpg',
                path: 'teachResources;video;intelligent;production',
                show: 4,
                repeatX: 4,
                width: '20%',
                height: '65%',
                title: '智能制造生产管理与控制',
                mode: 'portrait',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    id: 'Primary',
                    img: '/images/JXZY/videoImg/智能制造/三级--智能制造生产管理与控制 ( 初级 ).jpg',
                    path: 'teachResources;video;intelligent;production;Primary',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: '智能制造生产管理与控制初级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目1-智能制造系统认知/任务1.1 智能制造系统概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目1-智能制造系统认知/任务1.2 智能制造生产管控实训系统构成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目1-智能制造系统认知/任务1.3 智能制造生产管控实训系统运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.1 加工中心安全操作注意事项.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.2 加工程序导入常用方式.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.3 FANUC数控系统操作面板.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.4 加工中心控制面板.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.5 加工中心启动.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.6 数据通道修改.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.1.7 导入加工程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.1、2.2.2 加工中心刀具与刀柄、刀库.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.3 加工中心坐标系类型及其意义脚本.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.4 加工中心对刀方式.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.5 加工中心手动操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.6 组装刀柄与刀具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.7 手动安装刀具并换刀.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.2.8 操作加工中心对刀.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.3.1加工辅助功能2.3.2倍率参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.3.3 加工异常复位.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.3.4 加工主程序设定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.3.5 运行加工程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.3.6 程序运行停止及再运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.4.1 程序结构2.4.2 FANUC系统指令代码脚本.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.4.3 程序编辑操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.4.4 加工中心信号输出脚本.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.4.5 程序编辑.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目2-数控加工中心操作/任务2.4.6 系统通讯参数设定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.1.1 NX CAD建模流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.1.2 零件工程图识读.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.1.3 草图绘制工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.1.4 新建模型工程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.1.5 绘制零件草图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.2.1 NX CAD特征建模工具.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.2.2 零件模型尺寸测量.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.2.3 三维特征建模.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.2.4 模型尺寸验证.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.1 NX 加工模块.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.2 刀具类型与参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.3 加工工艺表编制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.4 加工环境参数设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.5 刀具类型创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.3.6 零件加工工序创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.4.1 仿真加工.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.4.2 程序后处理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.4.3 加工工序仿真.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目3-零件建模与CAM编程/任务3.4.4 后处理生成程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.1工业机器人虚拟仿真环境.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.2工业机器人示教盒.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.3程序导入方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.4 虚拟仿真工作站导入.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.5 工业机器人程序导入.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1.6 工业机器人通讯配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.1机床上下料系统操作准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2 工业机器人程序调整.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.1工件坐标系校准原理及方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.2运动指令.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.3位置修改方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.4 工件坐标系标定.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.5 手动运行测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.2.6 位置数据修改.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3 智能制造系统上下料程序调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.1 IO信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.2工业机器人上下料调试流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.3 dyn动态参数.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.4 IO信号手动测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.5 机器人上下料系统自动调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目4-机器人与机床上下料系统操作/4.3.6 机器人上下料系统程序优化.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.1.1MES的运行环境结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.1.2MES软件的框架.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.1.3MES软件安装操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.1MES系统的IT网络结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.2MES系统的通信连接服务.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.3MES系统的通信配置方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.4远程访问MES服务操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.5机器人通信配置操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.2.6铣床通信配置操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.3.1MES的生产调度结构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.3.2MES的生产调度过程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.3.3MES 的生产调度应用.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.3.4产品信息录入操作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目5 MES的配置与操作配套资源/5.3.5订单创建与下发.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.1.1 安全注意事项.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.1.2 功能检查内容.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.1.3 智能制造系统安全检查.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.1.4 智能制造系统启动.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.2.1智能制造系统操作流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.2.2 智能状态监控.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.2.3 智能制造生产运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.2.4 状态监控与运行调整.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.3.1 智能制造系统硬件管理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.3.2 智能制造系统软件管理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.3.3 硬件设备维护.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（初级）》配套视频/项目6-智能制造系统生产管控/6.3.4 软件系统管理.mp4',
                        video: true,
                      },
                    ],
                  },
                  {
                    id: 'Senior',
                    img: '/images/JXZY/videoImg/智能制造/三级--智能制造生产管理与控制 ( 中级 ).jpg',
                    path: 'teachResources;video;intelligent;production;Senior',
                    show: 6,
                    repeatX: 3,
                    width: '31%',
                    title: '智能制造生产管理与控制中级',
                    mode: 'transverse',
                    animate: 'animate__fadeInRight',
                    animateFlag: 'animate',
                    list: [
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目1 智能制造系统认知/任务1.1 智能制造系统概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目1 智能制造系统认知/任务1.2 汇博智能制造系统构成.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目1 智能制造系统认知/任务1.3 数字孪生概述.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目1 智能制造系统认知/任务1.4 智能制造关键技术.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目1 智能制造系统认知/任务1.5 智能制造生产管控实训系统运行.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.1.1零件设计基本要求.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.1.2三维模型设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.1.3零件三维模型设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.1.4零件工程图制作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.2.1识读装配图.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.2.2装配约束.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.2.3关节产品模型装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.2.4表达视图的制作.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.3.1NX后处理构造器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.3.2 NX后处理制作流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.3.3 后处理文件修改.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.3.4NX后处理文件设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.4.1 CAM编程流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.4.2 刀具选择.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.4.3加工工序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.4.4CAM加工工序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目2 零件设计与加工/任务2.4.5零件试制.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.1刚体.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.2运动副.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.3执行器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.4工业机器人模型导入与装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.5工业机器人模型配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.1.6工业机器人孪生模型测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.1碰撞体.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.2传感器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.3工具夹持方法.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.4快换主盘孪生模型搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.5快换工具孪生模型搭建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.6快换工具传感器设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.2.7快换工具手动开合.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.1信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.2信号适配器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.3创建机器人信号适配器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.4创建末端执行器信号适配器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.5末端执行器公式编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.3.6手动调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.1数字孪生系统技术路线.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.2外部信号配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.3信号映射.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.4外部通信与信号配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.5信号映射.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目3 工业机器人孪生系统构建/任务3.4.6系统调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.1.1工业机器人程序架构.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.1.2机器人通讯接口定义.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.1.3多工具手切换及控制程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.1.4项目与程序子程序的建立.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.1.5末端工具取放程序编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.2.1功能程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.2.2基于码垛的仓库取放程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.2.3功能程序OFFS创建编写.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.2.4仓库取放程序编制与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.3.1~4.3.2机床上下料系统和上下料程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目4 机器人数控机床上下料系统编程测试/任务4.3.3~4.3.4机床上下料程序编制与调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.1 传输面.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.2 传感器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.3 对象源及对象收集器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.4 运行参数及表达式.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.5 模型导入及布局.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.6 单元功能配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.1.7 单元功能调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.2.1 TIA OPC UA.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.2.2 配置TCI IP通信信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.2.3 配置OPC UA通信信号.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.2.4 通信信号测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.1 对象变换器.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.2 仿真序列.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.3 智能制造产线工艺流程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.4 配置加工中心单元.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.5 仿真序列程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目5 智能制造系统虚拟调试/任务5.3.6 虚拟调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.1.1 PLC与工业机器人通信接口.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.1.2 工业机器人通信控制程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.1.3 编写与工业机器人通信程序.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.1.4 PLC与工业机器人交互及测试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.2.1 S7通信协议.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.2.2 PLC与MES通信程序设计.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.2.3 PLC与MES通信交互实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.2.4 MES命令解析实操.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.3.1~6.3.2 人机界面及设计及.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.3.3 交互界面编程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目6 智能制造系统交互控制/任务6.3.4 智能制造系统交互调试.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.1 产品BOM分析.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.2 设备管理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.3 运行环境准备.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.4 系统设备配置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.5 关节产品EBOM创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.1.6 关节产品PBOM添加.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.2.1 订单来源.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.2.2 物料管理.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.2.3 生产订单的创建.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.2.4 仓位添加.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.2.5 料仓管理设置.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.3.1 生产排程.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.3.2 产品装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.3.3 加工生产基座零件.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.3.4 零件装配.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.1 数据采集.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.2 设备数据采集.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.3 生产数据采集.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.4 视频监控查看.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.5 设备状态信息查询.mp4',
                        video: true,
                      },
                      {
                        url:
                          JXZYUrl +
                          '/VIDEO/《智能制造生产管理与控制（中级）》配套视频/项目7 智能制造系统生产管控/任务7.4.6 数控铣床故障维护.mp4',
                        video: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'vision',
            img: '/images/JXZY/videoImg/机器视觉/一级--机器视觉.jpg',
            path: 'teachResources;video;vision',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '机器视觉',
            mode: 'portrait',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                id: '3D',
                img: '/images/JXZY/videoImg/机器视觉/二级--智能3D视觉技术与应用.jpg',
                path: 'teachResources;video;vision;3D',
                show: 6,
                repeatX: 3,
                width: '31%',
                title: '3D视觉技术',
                mode: 'transverse',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.1.1 机器视觉概述.mp4',
                    // url: '/video/1.1.1 机器视觉概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.1.2 3D相机概述.mp4',
                    // url: '/video/1.1.2 3D相机概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.1.3 3D相机安装.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.2.1 相机软件概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.2.2 3D图像采集原理.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.2.3 相机图像采集功能调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.3.1 3D相机参数.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.3.2 2D曝光调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目1  视觉图像采集/1.3.3 3D曝光调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.1.1 相机标定概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.1.2相机标定方式.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.1.3 安装标定板.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.1.3 安装标定板（实操无配音）.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.2.1 机器人通讯概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.2.2 Mech-Center软件与机器人通信方式.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.2.3Mech-Center连接机器人.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.2.3Mech-Center连接机器人（实操无配音）.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.3.1标定板检测参数.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.3.2运动轨迹参数.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.3.3内参标定.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.3.3内参标定（实操无配音）.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目2  3D相机手眼标定/2.3.4外参标定.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.1.1 深度学习概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.1.2 深度学习训练工具.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.1.3 基于目标工件的实例分割训练.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.2.1 机器视觉软件概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.2.2 Mech-Vision软件应用.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.2.3 图像采集.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.3.1 3D点云概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.3.2 点云处理方式.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.3.3 点云处理编程.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.4.1 深度学习框架.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.4.2 图像掩膜.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.4.3 图像掩膜提取.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目3  基于深度学习的图像识别/3.4.4 标签过滤.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.1.1 数字孪生概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.1.2 机器人末端执行器概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.1.3视觉平台场景搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.1.4机器人末端工具配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.2.1 机器人坐标系.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.2.2机器人基础操作.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.2.3Mech-viz软件基础操作.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.2.4基于Mech-Viz软件操作机器人.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.3.1图形化编程指令.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.3.2机器人拾取夹具程序规划.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目4  图形化机器人操作与编程/4.3.3机器人拾取夹具程序编写.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.1.1 点云映射概念.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.1.2  点云分割.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.1.3 制作模板.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.1.4 定位抓取点.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.2.1 模板匹配.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.2.2 点云匹配.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.2.3 位姿处理.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.2.4 点云匹配程序编写.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.2.5 点云位姿计算程序编写.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.3.1 目标工件位姿获取.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.3.2 任务流程设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目5  基于3D相机的无序分拣/5.3.3 机器人无序分拣程序编写.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.1.1点云轨迹概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.1.2点云定位引导.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.1.3点云轨迹运动程序编写流程.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.1.4点云轨迹图像处理编程.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.1.5机器人动作编程.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.2.1S7通讯协议.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.2.2 S7通讯接口.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.2.3PLC通讯接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.3.1人机界面概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.3.2交互界面设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.3.3人机交互界面设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《智能3D视觉技术与应用》配套视频/项目6  3D视觉综合应用/6.3.4人机交互界面调试.mp4',
                    video: true,
                  },
                ],
              },
            ],
          },
          {
            id: 'digitalTwin',
            img: '/images/JXZY/videoImg/数字孪生/一级--数字孪生.jpg',
            path: 'teachResources;video;digitalTwin',
            show: 4,
            repeatX: 4,
            width: '20%',
            height: '65%',
            title: '数字孪生',
            mode: 'portrait',
            animate: 'animate__fadeInRight',
            animateFlag: 'animate',
            list: [
              {
                id: 'dt',
                img: '/images/JXZY/videoImg/数字孪生/二级--工业机器人数字孪生技术.jpg',
                path: 'teachResources;video;digitalTwin;dt',
                show: 6,
                repeatX: 3,
                width: '31%',
                title: '数字孪生技术',
                mode: 'transverse',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.1.1  NX MCD软件概述.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.1.2  NX MCD软件界面介绍.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.1.3  NX MCD软件界面定制.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.1.4  NX MCD项目创建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.1.5  菜单框条界面定制.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.2.1  工作站组成.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.2.2  添加组件.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.2.3  移动组件.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.2.4  工作站模型导入.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.2.5  模型位姿调整.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.3.1  模块定位原理.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.3.2  装配约束.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.3.3  模块布局.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.3.4  快换工具布局.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目1-工业机器人应用编程仿真工作站搭建/1.3.5  工件布局.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.1刚体.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.2碰撞体.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.3碰撞材料.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.4滑动副.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.5位置控制.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.6对象源.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.7井式上料数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.1.8法兰和减速器工件数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.2.1传输面.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.2.2距离传感器 .mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.2.3速度控制 .mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.2.4输送带数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.3.1运行时察看器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.3.2机电仿真.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目2-井式上料与输送带数字孪生设计/2.3.3井式上料与输送带功能调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.1.1铰链副.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.1.2碰撞传感器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.1.3光幕传感器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.1.4旋转供料数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.1.5传感器与工件数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.2.1齿轮副.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.2.2位置传感器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.2.3速度传感器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.2.4变位机数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.2.5变位机传感器创建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.3.1固定副.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.3.2限位开关.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.3.3装配夹具数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目3-变位机与旋转供料数字孪生设计/3.3.4装配夹具传感器与夹持功能设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.1.1工业机器人本体介绍.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.1.2 机器人运动学.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.1.3 反算机构驱动.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.1.4 工业机器人数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.1.5 反算机构驱动设置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.2.1 握爪功能.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.2.2 弧口工具数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.2.3 快换主盘与弧口工具握爪创建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.3.1 仿真序列.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.3.2 基于时序的仿真序列.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.3.3 工作站周边数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.3.4 工业机器人取弧口工具仿真序列.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目4-工业机器人数字孪生设计/任务4.3.5 工业机器人取基座工件仿真序列.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.1  信号与信号适配器.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.2  工业机器人模型驱动接口设计原理.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.3  快换工具模型驱动接口设计原理.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.4  工业机器人模型驱动接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.5  快换工具模型驱动接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.1.6  工业机器人与工具模型驱动接口调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.2.1  井式上料模型驱动接口设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.2.2  输送带模型驱动接口设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.2.3  井式上料与输送带模型驱动接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.2.4  井式上料与输送带模型驱动接口调试.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.3.1  变位机模型驱动接口设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.3.2  旋转供料模型驱动接口设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.3.3  变位机模型驱动接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目5-数字孪生模型驱动接口设计与调试/5.3.4  旋转供料模型驱动接口配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.1 数字孪生系统架构.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.2 外部信号配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.3 信号映射.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.4 PLC数字孪生系统部署.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.5 机器人数字孪生系统部署.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.6 外部通信配置.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.1.7 NX MCD信号与外部信号映射.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.2.1 关节产品装配.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.2.2 基座工件数字孪生模型搭建.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.2.3 关节产品装配序列设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.3.1 关节产品装配流程.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.3.2 关节产品装配机器人程序.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.3.3 关节产品装配机器人关键点示教.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.3.4 关节产品装配主程序设计.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/任务6.3.5 关节产品装配虚拟调试.mp4',
                    video: true,
                  },
                ],
              },
              {
                id: 'virtual',
                img: '/images/JXZY/videoImg/数字孪生/二级--工业机器人虚拟仿真.jpg',
                path: 'teachResources;video;digitalTwin;virtual',
                show: 6,
                repeatX: 3,
                width: '31%',
                title: '虚拟仿真技术',
                mode: 'transverse',
                animate: 'animate__fadeInRight',
                animateFlag: 'animate',
                list: [
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第1章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第2章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第3章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第4章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第5章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第6章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第7章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第8章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第9章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第10章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第11章.mp4',
                    video: true,
                  },
                  {
                    url:
                      JXZYUrl +
                      '/VIDEO/《工业机器人虚拟仿真技术》配套视频/第12章.mp4',
                    video: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

window.bookConfig = bookConfig
