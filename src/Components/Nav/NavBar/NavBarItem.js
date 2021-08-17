import React from 'react'
import PropTypes from 'prop-types'

// <<- default: NavBarItem
/**
 * ### className:
 *  - __*king-ui-navbar-item*__
 *
 * @component
 */
const NavBarItem = ({ children, active, ...props }) => {
  return (
    <a className={(active) ? 'active' : ''} {...props}>{children}</a>
  )
}

NavBarItem.displayName = 'NavBarItem'

NavBarItem.defaultProps = {
  active: false
}

NavBarItem.propTypes = {
  /**
   * Can be set in The 'NavBar'
   */
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
// ->>

export default NavBarItem
