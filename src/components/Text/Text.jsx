import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ style, className, fontSize, shadow, disabled, children }) => {
    return (
        <span
            style={{
                fontSize: fontSize || 'unset',
                fontFamily: 'unset',
                color: (disabled) ? 'var(--theme-color--disabled)' : 'var(--theme-color)',
                textShadow: (shadow) ? (disabled ? 'var(--theme-text-shadow)' : 'var(--theme-text-shadow--disabled)') : 'none',
                ...style
            }}
            className={className}
        >
            {children}
        </span>
    )
}

Text.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    fontSize: PropTypes.string,
    shadow: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.arrayOf(PropTypes.object.isRequired)
    ])
}

export default Text
