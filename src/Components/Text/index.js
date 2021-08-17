import React from 'react'
import PropTypes from 'prop-types'

// <<- default: Text
/**
 * Text Component
 *
 * @component
 */
const Text = ({
  style,
  className,
  fontSize,
  shadow,
  bold,
  bolder,
  italic,
  oblique,
  underline,
  disabled,
  children,
  ...props
}) => {
  return (
    <span
      style={{
        fontSize: fontSize || 'unset',
        fontStyle: (italic)
          ? 'italic'
          : (
              (oblique)
                ? 'oblique'
                : 'unset'
            ),
        fontWeight: (bold)
          ? 'bold'
          : (
              (bolder)
                ? 'bolder'
                : 'unset'
            ),
        textDecoration: (underline)
          ? 'underline'
          : 'unset',
        ...style
      }}
      className={`king-ui-text ${
        (shadow)
          ? 'king-ui-text-shadow'
          : ''} ${
        (disabled)
          ? 'king-ui-text--disabled'
          : ''} ${className || ''}`}
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
  bold: PropTypes.bool,
  bolder: PropTypes.bool,
  italic: PropTypes.bool,
  oblique: PropTypes.bool,
  underline: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.node),
    PropTypes.node.isRequired
  ])
}
// ->>

export default Text
