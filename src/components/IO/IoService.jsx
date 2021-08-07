import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ioClient from 'socket.io-client'

const ioStorage = {
    // <endpoint>: { io, selector: (string || array(string)), callback: func }
}

const IOService = ({ endpoint, selector, event, callback }) => {
    useEffect(async () => {
        // connect and listen for event
    }, [endpoint, event])

    useEffect(async () => {
        // add selector to config.io
    }, [selector])

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
