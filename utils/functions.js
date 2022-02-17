const removeLeadingSlash = function (str) {
  if (str) {
    if (str.charAt(0) == '/') {
      let newString = str.substring(1)
      return newString
    }
  }

  return str
}

const removeTrailingSlash = function (str) {
  if (str) {
    const lastChar = str.length - 1
    if (str.charAt(lastChar) == '/') {
      let newString = str.substring(0, lastChar)
      return newString
    }
  }

  return str
}

const addTrailingSlash = function (str) {
  if (str && str.length > 1) {
    const lastChar = str.length - 1

    if (str.charAt(lastChar) != '/') {
      return `${str}/`
    }
  }

  return str
}

const addLeadingSlash = function (str) {
  if (str && str.length > 1) {
    if (str.charAt(0) != '/') {
      return `/${str}`
    }
  }

  return str
}

const removeBothSlashes = function (str) {
  str = removeTrailingSlash(str)
  str = removeLeadingSlash(str)
  return str
}

const addBothSlashes = function (str) {
  str = addLeadingSlash(str)
  str = addTrailingSlash(str)
  return str
}

export {
  removeLeadingSlash,
  removeTrailingSlash,
  removeBothSlashes,
  addTrailingSlash,
  addLeadingSlash,
  addBothSlashes,
}
