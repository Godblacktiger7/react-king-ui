import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

// <<- default: Input
/**
 * Input element
 *
 * @component
 */
const Input = ({
  style,
  className,
  type,
  value,
  text,
  fontSize,
  ...props
}) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        ...style?.div
      }}
      className={`king-ui-input ${className || ''}`}
    >
      <input
        style={{ ...style?.input }}
        type={type}
        value={value}
        {...props}
      />
      <Text
        style={{ ...style?.text }}
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
  style: PropTypes.shape({
    div: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])),
    input: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])),
    text: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]))
  }),
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  text: PropTypes.string,
  fontSize: PropTypes.string
}
// ->>

export default Input
