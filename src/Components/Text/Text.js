import React from 'react'
import PropTypes from 'prop-types'

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
        fontSize: fontSize || 'none',
        fontFamily: 'unset',
        color: (disabled) ? 'var(--theme-color--disabled)' : 'var(--theme-color)',
        fontStyle: (italic) ? 'italic' : ((oblique) ? 'oblique' : 'none'),
        fontWeight: (bold) ? 'bold' : ((bolder) ? 'bolder' : 'none'),
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

export default Text
