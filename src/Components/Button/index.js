import React from 'react'
import PropTypes from 'prop-types'

// <<- default: Button
/**
 * React Button Component
 *
 * @component
 */
const Button = ({
  style,
  className,
  shadow,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      style={style}
      className={`king-ui-btn ${
        (shadow)
          ? 'king-ui-box-shadow'
          : ''} ${className || ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  className: PropTypes.string,
  /**
   * Enable Box Shadow
   */
  shadow: PropTypes.bool,
  /**
   * Disable Button
   */
  disabled: PropTypes.bool,
  /**
   * Everything you want
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.node),
    PropTypes.node.isRequired
  ])
}
// ->>

export default Button
