import React from 'react'
import PropTypes from 'prop-types'

import './input.min.css'

import Text from '../Text/Text.jsx'

export const Input = ({ style, className, type, value, text, fontSize, onChange, ...props }) => {
    return (
        <div
            style={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '1.2em 0 .2em 0',
                fontSize: fontSize,
                fontFamily: 'unset',
                ...style
            }}
            className={`king-ui-input ${className}`}
        >
            <input
                style={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '1em',
                    fontFamily: 'unset',
                    border: 'none',
                    borderBottom: 'var(--theme-border-width) var(--theme-border-style) var(--theme-border-color)',
                    borderRadius: 'var(--theme-border-radius)',
                    background: 'var(--theme-input-background)',
                    color: 'var(--theme-input-color)'
                }}
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
            <Text
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    width: '100%',
                    top: '50%',
                    transition: 'transform .25s ease',
                    fontSize: '.9em'
                }}
                shadow={(value) ? true : ((value === 0) || false)}
            >
                {text}
            </Text>
        </div>
    )
}

Input.defaultProps = {
    fontSize: 'unset',
    type: 'text'
}

Input.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    text: PropTypes.string,
    fontSize: PropTypes.string,
    onChange: PropTypes.func
}

export default Input
