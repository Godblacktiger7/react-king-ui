import React from 'react'
import PropTypes from 'prop-types'

import './input.css'

import Text from '../Text/Text.js'

export const Input = ({ style, className, type, value, text, fontSize, onChange, ...props }) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        ...style
      }}
      className={`king-ui-input ${className || ''}`}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <Text
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
