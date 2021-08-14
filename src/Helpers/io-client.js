import socketIoClient from 'socket.io-client'

// TODO remove logs after testing

export const ioClient = {
  _io: {
    // NOTE <id>: ioClient instance [id: endpoint]
  },
  _events: {
    // NOTE <id>: { eventName: [{eventId: ..., func: [(...props) => {}, ...]}] }
  },

  clear: async function () {
    for (const endpoint of Object.keys(this._io)) {
      this._io[endpoint].disconnect()
      this._io[endpoint].close()
      delete this._io[endpoint]
    }
  },

  // <<- connect: [endpoint: string, callback(error, data)]
  /**
   * Callback for connect
   *
   * @callback callback
   * @param {object} error
   * @param {any} data
   */

  /**
   * Connect to endpoint if not already exists.
   * Connected instances will be stored in this._io
   *
   * @param {string} endpoint socket io server endpoint
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

      console.log({ _io: this._io })
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

  disconnect: async function (endpoint, callback) {},

  event: async function (endpoint, eventId) {},

  eventRemove: async function (endpoint, eventId) {}
}

export default ioClient
