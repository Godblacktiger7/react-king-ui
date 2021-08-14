import PropTypes from 'prop-types'

import './Overlay.css'

const Overlay = ({
  style,
  zIndex,
  children,
  ...props
}) => {
  return (
    <div className="king-ui-nav-overlay"
      style={{
        zIndex,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}

Overlay.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  zIndex: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Overlay
