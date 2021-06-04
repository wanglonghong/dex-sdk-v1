
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./elixirswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./elixirswap-sdk.cjs.development.js')
}
