const key = 'SPHERE_POS'
export const setPos = (pos) => {
  let type = typeof pos
  let saveData = ''
  if (['string', 'number'].indexOf(type) != -1) {
    saveData = {
      type,
      data: pos,
    }
  } else {
    saveData = {
      type,
      data: pos,
    }
  }
  localStorage.setItem(key, JSON.stringify(saveData))
}

export const getPos = () => {
  let val = localStorage.getItem(key)
  let result = ''
  if (val == null) {
    return result
  } else {
    let valParse = JSON.parse(val)
    let data = valParse.data
    result = data
    return data
  }
}

export const removePos = () => {
  localStorage.removeItem(key)
}
