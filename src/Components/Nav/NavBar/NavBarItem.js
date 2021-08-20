import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

/**
 * ### Theme variables in use:
 *  - --navbar-item-color
 *  - --navbar-item-bg
 *  - --navbar-item-active-decoration
 *  - --filter-active (for active item)
 *  - :hover
 *    - --filter-hover
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
      className={classNames(
        styles.item,
        (active) && styles.active,
        (className) && className
      )}
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
