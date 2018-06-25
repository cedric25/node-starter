const log = require('./src/logger')
const app = require('./src/app')

log.info('Starting app...')
process.env.LOG_LEVEL === 'debug' && log.debug(`Debug activated`)

app.run()
