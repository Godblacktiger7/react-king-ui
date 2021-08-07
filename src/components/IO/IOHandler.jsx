import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ioClient from 'socket.io-client'

const ioStorage = {} // { client: io }

const IOHandler = ({ endpoint, ...handler }) => {
    useEffect(async () => {
        const io = ioStorage[endpoint] || { client: ioClient(endpoint) }

        if (!io.client.connected) {
            console.log(`io endpoint ("${endpoint}") is not connected`)
            console.log('connect ...')
            io.client.connect(endpoint)
        }

        for (const [event, callback] of Object.entries(handler)) {
            io.on(event, callback)
        }

        ioStorage[endpoint] = io
    }, [endpoint, handler])

    useEffect(() => {
        return () => {
            if (ioStorage[endpoint]) {
                if (ioStorage[endpoint].client.connected) {
                    console.log('disconnect from:', endpoint)
                    ioStorage[endpoint].client.disconnect()
                }
                delete ioStorage[endpoint]
            }
        }
    })

    return null
}

IOHandler.defaultProps = {
    endpoint: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ])
}

export default IOHandler
