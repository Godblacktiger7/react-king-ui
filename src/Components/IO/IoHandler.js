import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ioClient from 'socket.io-client'

const ioStorage = {} // { client: io, callbacks: { <id>: { <event>: callback } } }

export const clearIoStorage = (endpoint, callbacksOnly = true) => {
  if (ioStorage[endpoint]) {
    if (callbacksOnly) {
      ioStorage[endpoint].callbacks = {}
    } else {
      if (ioStorage[endpoint].client.connected) {
        ioStorage[endpoint].client.disconnect()
      }

      delete ioStorage[endpoint]
    }
  }
}

export const IoHandler = ({ endpoint, id, ...handler }) => {
  useEffect(() => {
    function ioEventHandler (event, ...props) {
      for (const eventHandler of Object.values(ioStorage[endpoint].callbacks[event])) {
        eventHandler(...props)
      }
    }

    if (!ioStorage[endpoint]) {
      ioStorage[endpoint] = (function () {
        const io = ioClient.connect(endpoint)
        const callbacks = {}

        for (const [event, callback] of Object.entries(handler)) {
          io.on(event, (...props) => ioEventHandler(event, ...props))
          callbacks[event] = {}
          callbacks[event][id] = callback
        }

        return { client: io, callbacks }
      }())
    } else {
      for (const event of Object.keys(handler)) {
        if (!ioStorage[endpoint].callbacks[event]) {
          ioStorage[endpoint].client.on(event, (...props) => ioEventHandler(event, ...props))
          ioStorage[endpoint].callbacks[event] = {}
        }

        if (!ioStorage[endpoint].callbacks[event][id]) {
          ioStorage[endpoint].callbacks[event][id] = handler[event]
        }
      }
    }
  }, [endpoint, handler])

  return null
}

IoHandler.defaultProps = {
  id: 0
}

IoHandler.defaultProps = {
  endpoint: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default IoHandler
