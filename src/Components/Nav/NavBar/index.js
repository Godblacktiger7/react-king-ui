import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import classNames from 'classnames'

import styles from './styles.module.css'

/**
 * Navigation bar on top (desktop & mobile)
 *
 * ### Theme variables in use:
 *  * --navbar-border
 *  * --navbar-bg
 *  * icon :hover:
 *    * --filter-hover
 *
 * @component
 */
const NavBar = ({
  style,
  className,
  active,
  children
}) => {
  // on toggle open navbar (mobile version only)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // check type of children
    if (!Array.isArray(children)) {
      console.error('[NavBar] Children have to be from type Array!')
      return
    }

    // check if all children are 'NavBarItems'
    const check = children.filter(
      child => child.type.displayName === 'NavBarItem'
    )

    if (check.length !== children.length) {
      throw new Error('Invalid NavBar items!')
    }

    // set the active child
    if (typeof active === 'number') {
      children[active] = React.cloneElement(
        children[active],
        {
          active: true
        },
        ...children[active].props.children
      )
    }
  }, [children, active])

  console.log({ styles })
  return (
    (Array.isArray(children))
      ? (
          <div
            style={style}
            className={classNames(
              styles.navbar,
              (open) && styles.open,
              (className) || className
            )}
            onClick={() => {
              if (open) setOpen(false)
            }}
          >
            {children?.map((child, idx) => {
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
            }) || null}
            <a
              className={classNames(
                styles.icon
              )}
              onClick={() => setOpen(prev => !prev)}
            ><FaBars /></a>
          </div>
        )
      : null
  )
}

NavBar.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  className: PropTypes.string,

  /**
   * set active item (of children) per index
   */
  active: PropTypes.number,

  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default NavBar
