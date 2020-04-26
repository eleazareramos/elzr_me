function combineStyles() {
  let result = {}
  for (let i in arguments) {
    const style = arguments[i]
    if (style && typeof style == 'object') {
      result = { ...result, ...style }
    }
  }
  return result
}

export default combineStyles