const pinologger = require('pino-http')
const pino = require('pino')
const { randomUUID } = require('node:crypto')
const logger = pinologger({logger:pino(),
    genReqId: function (req, res) {
        const existingID = req.id ?? req.headers["x-request-id"]
        if (existingID) return existingID
        const id = randomUUID()
        res.setHeader('X-Request-Id', id)
        return id
      },})

module.exports = logger