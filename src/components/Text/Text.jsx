import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ style, className, fontSize, shadow, underline, disabled, children, ...props }) => {
    return (
        <span
            style={{
                fontSize: fontSize || 'none',
                fontFamily: 'unset',
                color: (disabled) ? 'var(--theme-color--disabled)' : 'var(--theme-color)',
                textDecoration: underline ? 'underline' : 'none',
                textShadow: (shadow) ? (disabled ? 'var(--theme-text-shadow--disabled)' : 'var(--theme-text-shadow)') : 'none',
                ...style
            }}
            className={className}
            {...props}
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
    underline: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.arrayOf(PropTypes.object.isRequired)
    ])
}

export default Text
