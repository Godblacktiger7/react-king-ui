import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Router = ({ active, children }) => {
    const [route, setRoute] = useState()
    const pages = useRef([])

    useEffect(() => {
        pages.current = (children instanceof Array) ? children : [children]
    }, [children])

    useEffect(() => [
        setRoute(() => pages.current.filter(child => child.props.route === active))
    ], [active])

    return (
        <>
            {route}
        </>
    )
}

Router.propTypes = {
    active: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node.isRequired),
        PropTypes.node.isRequired
    ])
}

export default Router
