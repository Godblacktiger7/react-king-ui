import React from 'react'
import PropTypes from 'prop-types'

import '../../default.css'
import './button.css'

export const Button = ({ style, className, shadow, disabled, children, ...props }) => {
    const classNames = [
        'king-ui-btn',
        (disabled) ? 'king-ui-btn--disabled' : '',
        (shadow) ? ((disabled) ? 'king-ui-btn-shadow--disabled' : 'king-ui-btn-shadow') : '',
        className || ''
    ]

    return (
        <button
            style={{
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
    children: PropTypes.object.isRequired
}

export default Button
