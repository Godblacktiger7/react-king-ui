import React from 'react'
import PropTypes from 'prop-types'

// <<- default: Overlay
const Overlay = ({
  style,
  children,
  ...props
}) => {
  return (
    <div className="king-ui-nav-overlay"
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

Overlay.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
// ->>

export default Overlay
