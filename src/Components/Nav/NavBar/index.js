import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'

import './style.css'

/**
 * > Navigation bar on top (desktop & mobile)
 *
 * ### className:
 *  - __*king-ui-navbar*__
 *
 * @component
 */
const NavBar = ({
  style,
  className,
  active,

  // styling props
  position,
  fontSize,

  children
}) => {
  // on toggle open navbar (mobile version only)
  const [responsive, setResponsive] = useState(false)

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

  // TODO handle onClickOutside (close)
  return (
    (Array.isArray(children))
      ? (
          <div
            style={{
              position: position,
              top: 0,
              right: 0,
              left: 0,
              zIndex: 100,
              overflow: 'auto',
              background: 'var(--navbar-bg)',
              width: '100%',
              height: 'fit-content',
              minHeight: `calc(${fontSize} + .5rem)`,
              border: 'var(--navbar-border, "2px solid black")',
              ...style
            }}
            className={`king-ui-navbar ${
              responsive ? 'responsive' : ''
            } ${
              className || ''
            }`}
            onClick={() => {
              if (responsive) setResponsive(false)
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
              className='king-ui-navbar-icon'
              onClick={() => setResponsive(prev => !prev)}
            ><FaBars /></a>
          </div>
        )
      : null
  )
}

NavBar.defaultProps = {
  position: 'relative',
  fontSize: '1rem'
}

NavBar.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  className: PropTypes.string,
  /**
   * set active item (children) per index
   */
  active: PropTypes.number,

  position: PropTypes.string,
  fontSize: PropTypes.string,

  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default NavBar
