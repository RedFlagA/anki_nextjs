const path = require('path')
module.exports = {
  experimental: {
    serverActions: true,
    includePaths: [path.join(__dirname, 'styles')],
  },
}
