//格式化数字,让变得千位隔开
const formatCount = (count) => {
  if (count.toString().indexOf(".") === -1) {
    return count.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').slice(0, -2)
  } else {
    return count.toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
}

//判断手机是不是全面屏
const isFullScreen = () => {
  const cHeight = window.screen.height
  const cWidth = window.screen.width
  if ((cHeight / cWidth) >= 2) {
    return true
  } else {
    return false
  }
}

export {
  formatCount,
  isFullScreen
}
