const fs = require('fs')
const path = require('path')
const log = require('./logger.js')
const DataDebugger = require('../structs/DataDebugger.js')
const debugPath = path.join(__dirname, '..', '..', 'settings', 'debug.json')

/**
 * @typedef {Object} DebugData
 * @property {string[]} ids
 * @property {string[]} urls
 */

/** @type {DebugData} */
let debugData

if (fs.existsSync(debugPath)) {
  log.debug.info('Preloaded debug data from settings/debug.json')
  debugData = JSON.parse(fs.readFileSync(debugPath))
}

exports.feeds = new DataDebugger(debugData ? debugData.ids : [], 'feeds')
exports.links = new DataDebugger(debugData ? debugData.urls : [], 'links')
