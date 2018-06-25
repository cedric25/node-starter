const log = require('./logger')
const { add } = require('./utils')

function run () {
  const result = add(2, 2)
  log.info(`App has run: ${result}`)
}

module.exports = {
  run,
}
