import React from 'react'
import PropTypes from 'prop-types'

/**
 * ### Theme variables in use:
 *  * --color
 *  * --text-shadow
 *
 * @component
 */
const Text = ({
  style = {},
  className = '',
  fontSize = 'inherit',
  color = 'var(--color)',
  shadow = false,
  textShadow = 'var(--text-shadow)',
  fontWeight = 'normal',
  fontStyle = 'unset',
  textDecoration = 'unset',
  children = null,
  ...props
}) => {
  return (
    <span
      style={{
        fontSize: fontSize || 'inherit',
        fontStyle,
        fontWeight: 'normal',
        textDecoration,
        color: 'var(--color)',
        background: 'transparent',
        padding: 0,
        margin: 0,
        textShadow: (shadow)
          ? textShadow
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
  color: PropTypes.string,
  shadow: PropTypes.bool,
  textShadow: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  textDecoration: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Text
