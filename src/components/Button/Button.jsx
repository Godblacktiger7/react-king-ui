import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

export const Button = ({ style, className, shadow, disabled, children, ...props }) => {
    const classNames = [
        'king-ui-btn',
        (disabled) ? 'king-ui-btn--disabled' : '',
        className || ''
    ]

    return (
        <button
            style={{
                boxShadow: (shadow) ? (disabled ? 'var(--theme-box-shadow)' : 'var(--theme-box-shadow--disabled)') : 'none',
                ...style
            }}
            className={classNames.join(' ')}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    className: PropTypes.array,
    shadow: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.arrayOf(PropTypes.object.isRequired)
    ])
}

export default Button
