import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'

import NavBarItem from './NavBarItem'

// <<- default: NavBar
/**
 * ### className:
 *  - __*king-ui-navbar*__
 *
 * @component
 */
const NavBar = ({ active, children }) => {
  useEffect(() => {
    // check type of children
    if (!Array.isArray(children)) {
      throw new Error('Children have to be from type Array!')
    }

    // check if all children are 'NavBarItems'
    const check = children.filter(
      child => child.type.displayName === 'NavBarItem'
    )

    if (check.length !== children.length) {
      throw new Error('Invalid NavBar items!')
    }
  }, [children])

  if (typeof active === 'number') {
    children[active] = React.cloneElement(
      children[active],
      {
        active: true
      },
      ...children[active].props.children
    )
  }

  return (
    <div
      className='king-ui-navbar'
    >
      {children.map((child, idx) => {
        if (idx === active) {
          return React.cloneElement(
            child,
            {
              key: idx,
              active: true
            },
            ...child.props.children
          )
        } else return child
      })}
      <a className='king-ui-navbar-icon'><FaBars /></a>
    </div>
  )
}

NavBar.propTypes = {
  /**
   * set active item (children) per index
   */
  active: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}
// ->>

export default NavBar
