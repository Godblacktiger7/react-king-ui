import React from 'react'
import PropTypes from 'prop-types'

const getFontSize = () => {
    let screen = window.screen.availHeight

    if (window.screen.availWidth < screen) screen = window.screen.availWidth
    else screen = window.screen.availHeight

    if (screen / 1080 > 1) return `${16 * (screen / 1080)}px`

    return `${(16 * (screen / 1080)) * (((screen / 1080) * 2.5 <= 1) ? 2.5 : 1)}px`
}

const Root = ({ style, className, fontSize, children, ...props }) => {
    return (
        <div
            style={{
                position: 'relative',
                userSelect: 'none',
                background: 'unset',
                color: 'unset',
                fontSize: fontSize || getFontSize(),
                fontFamily: 'unset',
                ...style
            }}
            className={className}
            {...props}
        >
            {children}
        </div>
    )
}

Root.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    fontSize: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object.node),
        PropTypes.node.isRequired
    ])
}

export default Root
