import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ioClient from 'socket.io-client'

/**
 * <endpoint> {
 * io: ...
 * callback: [ ... ]
 * }
 */
const ioStorage = {}

const IOService = ({ endpoint, event, callback }) => {
    useEffect(async () => {
        // connect and listen for event
    }, [endpoint, event, callback])

    return null
}

IOService.defaultProps = {
    endpoint: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]),
    selector: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]),
    event: PropTypes.string,
    callback: PropTypes.func
}

export default IOService
