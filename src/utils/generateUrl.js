const fs = require('fs')
function gen() {
  fs.readFile('./test.txt', function (err, data) {
    if (err) return console.error(err)
    const content = data.toString()
    const arr = content.split(/\r?\n/)
    const res = arr.map((item) => {
      // const obj = {
      //   url:
      //     'jjjjjjj' +
      //     '/VIDEO/《工业机器人数字孪生技术》配套视频/项目6-工业机器人装配应用虚拟调试/' +
      //     item,
      //   video: true,
      // }
      const obj = {
        img: '/images/DCGH/sxjd/01.png',
        url: 'jjjjjjj' + '/SXJDJSFA/' + item,
      }
      return obj
    })
    console.log(res)
  })
}

gen()
