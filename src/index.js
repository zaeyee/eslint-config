const { isPackageExists } = require('local-pkg')

const isTS = isPackageExists('typescript')
const isVue = isPackageExists('vue')

module.exports = {
  extends: ['./base.js', isTS ? './ts.js' : '', isVue ? './vue.js' : '']
}
