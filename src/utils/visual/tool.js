const toHump = (name) => {
  // eslint-disable-next-line no-useless-escape
  return name.replace(/\_(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}
// 驼峰转换下划线
const toLine = (name) => {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export { toHump, toLine }
