import React from 'react'
import PropTypes from 'prop-types'

export const Root = ({ style, className, children, ...props }) => {
    return (
        <div
            style={{
                position: 'relative',
                userSelect: 'none',
                background: 'unset',
                color: 'unset',
                fontSize: 'unset',
                fontFamily: 'unset',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
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
        PropTypes.object.isRequired,
        PropTypes.arrayOf(PropTypes.object.isRequired)
    ])
}

export default Root
