import socketIoClient from 'socket.io-client'

/**
 * std callback
 *
 * @callback callback
 * @param {Object} error
 * @param {Object} data
 */

// TODO remove logs after testing

export const ioClient = {
  _io: {
    // NOTE <id>: ioClient instance [id: endpoint]
  },

  _events: {
    // NOTE <id>: { eventName: [{eventId: ..., func: [(...props) => {}, ...]}] }
  },

  // <<- clear
  /**
   * Close and remove all io connections
   */
  clear: async function () {
    for (const endpoint of Object.keys(this._io)) {
      this._io[endpoint].disconnect()
      this._io[endpoint].close()
      delete this._io[endpoint]
    }
  },
  // ->>

  // <<- connect [endpoint: string, callback(error, data)]
  /**
   * Connect to endpoint if not already exists.
   * Connected instances will be stored in this._io
   *
   * @param {string} endpoint - socket io server endpoint
   * @param {callback} callback
   */
  connect: async function (endpoint, callback) {
    if (!endpoint) {
      if (typeof callback === 'function') return callback(new Error('Endpoint Missing'), null)
      else throw new Error('Endpoint Missing!')
    }

    if (!this._io[endpoint]) {
      console.log(`Create endpoint to "${endpoint}"`)

      this._io[endpoint] = socketIoClient(endpoint)
    } else {
      if (!this._io[endpoint].connected) {
        console.log(`"${endpoint}" exists, try reconnect.`)
        this._io[endpoint].connect(endpoint)
      } else {
        console.log(`Nothing to do for "${endpoint}"`)
      }
    }

    if (typeof callback === 'function') return callback(null, this._io[endpoint])
  },
  // ->>

  // <<- disconnect [endpoint: string, callback(error, data)]
  /**
   * Disconnect from io endpoint,
   *
   * @param {string} endpoint - socket io server endpoint
   * @param {callback} callback
   */
  disconnect: async function (endpoint, callback) {
    if (!endpoint) {
      if (typeof callback === 'function') return callback(new Error('Endpoint Missing'), null)
      else throw new Error('Endpoint Missing!')
    }

    if (this._io[endpoint]?.connected) {
      this._io[endpoint].disconnect()
      if (typeof callback === 'function') return callback(null, this._io[endpoint])
    }

    if (typeof callback === 'function') return callback(null, null)
  },
  // ->>

  event: async function (endpoint, eventId) {},

  eventRemove: async function (endpoint, eventId) {}
}

export default ioClient
