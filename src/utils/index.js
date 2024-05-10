/**
 * @description 格式化时间
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
export function ping(ip) {
  return new Promise((resolve) => {
    var img = new Image()
    var start = new Date().getTime()
    var flag = false
    var isCloseWifi = true
    var hasFinish = false
    img.onload = () => {
      if (!hasFinish) {
        flag = true
        hasFinish = true
        console.log('Ping ' + ip + ' success. ')
        resolve(true)
      }
    }
    img.onerror = function () {
      if (!hasFinish) {
        if (!isCloseWifi) {
          flag = true
          console.log('Ping ' + ip + ' success. ')
          resolve(true)
        } else {
          console.log('network is not working!')
        }
        hasFinish = true
      }
    }
    setTimeout(function () {
      isCloseWifi = false
      console.log(' start ping...')
    }, 2)

    if (ip.includes('http')) {
      img.src = ip + '/' + start
    } else {
      img.src = 'http://' + ip + '/' + start
    }
    setTimeout(function () {
      if (!flag) {
        hasFinish = true
        flag = false
        resolve(false)
        console.log('Ping ' + ip + ' fail. ')
      }
    }, 3000)
  })
}
