const path = require('path')

/**
 * 获取扩展名（含.）
 * ===================================================================
 * @param {String} oldFileName - 文件名（路径）字符串
 * @returns {*|string}
 */
const getExtension = (oldFileName) => {
  const extname = path.extname(oldFileName)

  if (!extname) {
    return oldFileName
  }

  return extname
}

module.exports = getExtension
