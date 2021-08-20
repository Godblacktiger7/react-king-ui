import React from 'react'
import PropTypes from 'prop-types'

// <<- default: Text
/**
 * ### Theme variables in use:
 *  * --color
 *  * --text-shadow
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
  children,
  ...props
}) => {
  return (
    <span
      style={{
        fontSize: fontSize || 'inherit',
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
        color: 'var(--color)',
        background: 'transparent',
        padding: 0,
        margin: 0,
        textShadow: (shadow)
          ? 'var(--text-shadow)'
          : 'unset',
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
  bold: PropTypes.bool,
  bolder: PropTypes.bool,
  italic: PropTypes.bool,
  oblique: PropTypes.bool,
  underline: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.node),
    PropTypes.node.isRequired
  ])
}
// ->>

export default Text
