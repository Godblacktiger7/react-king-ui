import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({
  style,
  className,
  children,
  ...props
}) => {
  return (
    <div className={className}
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
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Overlay
