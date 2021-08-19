import React from 'react'
import PropTypes from 'prop-types'

/**
 * ### className: [type: `<a></a>`]
 *  - if active is true: __*.active*__
 *
 * @component
 */
const NavBarItem = ({
  style,
  className,
  active,
  children,
  ...props
}) => {
  return (
    <a
      className={`${(active) ? 'active' : ''} ${className || ''}`}
      {...props}
    >{children}</a>
  )
}

NavBarItem.displayName = 'NavBarItem'

NavBarItem.defaultProps = {
  active: false
}

NavBarItem.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  className: PropTypes.string,
  /**
   * Can be set in The 'NavBar'
   */
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default NavBarItem
