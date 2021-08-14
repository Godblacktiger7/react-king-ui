import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import NavButton from './NavComponents/NavButton'
import Overlay from './NavComponents/Overlay'

const NavMenuOverlay = ({
  zIndex,
  toggleMenu,
  pos,
  navSize,
  childrenNavButton,
  children,
  propsOverlay,
  ...props
}) => {
  const [state, setState] = useState(toggleMenu)

  const init = useRef(true)

  const navButtonPosition = useCallback(() => {
    return {
      tr: { top: '.5em', right: '.5em' },
      tl: { top: '.5em', left: '.5em' },
      br: { bottom: '.5em', right: '.5em' },
      bl: { bottom: '.5em', left: '.5em' }
    }[pos]
  }, [pos])

  useEffect(() => {
    if (init.current) init.current = false
    else setState(prev => !prev)
  }, [toggleMenu])

  return (
    <>
      {(state) && <Overlay zIndex={zIndex} {...propsOverlay}>
        {children}
      </Overlay>}

      <NavButton
        {...props}
        style={{
          fontSize: navSize,
          ...navButtonPosition()
        }}
        zIndex={zIndex}
        onClick={() => setState(prev => !prev)}
      >
        {childrenNavButton}
      </NavButton>
    </>
  )
}

NavMenuOverlay.defaultProps = {
  toggleMenu: false,
  pos: 'tr'
}

NavMenuOverlay.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  ),
  styleOverlay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  zIndex: PropTypes.number,
  navSize: PropTypes.string,
  toggleMenu: PropTypes.bool,
  pos: PropTypes.oneOf([
    'tr', 'tl', 'br', 'bl'
  ]),
  childrenNavButton: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  propsOverlay: PropTypes.object
}

export default NavMenuOverlay
