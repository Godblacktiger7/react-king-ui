import React from 'react'
import PropTypes from 'prop-types'

import './root.css'

const getFontSize = () => {
  let screen = window.screen.availHeight

  if (window.screen.availWidth < screen) screen = window.screen.availWidth
  else screen = window.screen.availHeight

  if (screen / 1080 > 1) return `${16 * (screen / 1080)}px`

  return `${(16 * (screen / 1080)) * (((screen / 1080) * 2.5 <= 1) ? 2.5 : 1)}px`
}

const Root = ({ style, className, fontSize, children, ...props }) => {
  return (
    <div
      style={{
        fontSize: fontSize || getFontSize(),
        ...style
      }}
      className={`king-ui-root ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

Root.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.node),
    PropTypes.node.isRequired
  ])
}

export default Root
