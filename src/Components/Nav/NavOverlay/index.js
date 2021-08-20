import React, {
  useEffect,
  useState,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.css'

import NavButton from './NavButton'
import Overlay from './Overlay'

import styles from './styles.module.css'

/**
 * > This is just a component which will handle the
 * > nav **button** and the **overlay**
 *
 * ### Theme variables in use:
 *  - overlay:
 *    - --navoverlay-bg
 *
 * @component
 */
const NavOverlay = ({
  button,
  overlay,
  navPosition,
  toggleOverlay,
  children
}) => {
  const [state, setState] = useState(toggleOverlay)

  const init = useRef(true)

  useEffect(() => {
    if (init.current) init.current = false
    else setState(prev => !prev)
  }, [toggleOverlay])

  useEffect(() => {
    button.className = classNames(
      styles[navPosition] || styles.tr,
      styles.navbutton,
      (button.className) && button.className
    )
  }, [button])

  useEffect(() => {
    overlay.className = classNames(
      styles.overlay,
      (overlay.className) && overlay.className
    )
  }, [overlay])

  return (
    <>
      {(state) && (
        <Overlay
          {...overlay}
        >
          {children}
        </Overlay>
      )}

      <NavButton
        {...{ ...button, onClick: () => setState(prev => !prev) }}
      />
    </>
  )
}

NavOverlay.defaultProps = {
  overlay: {},
  button: {},
  navPosition: 'tr',
  zIndex: 100,
  toggleOverlay: false
}

NavOverlay.propTypes = {
  /**
   * nav button props
   */
  button: PropTypes.object,

  /**
   * nav overlay props
   */
  overlay: PropTypes.object,

  /**
   * 'tr', 'tl', 'br', 'bl'
   */
  navPosition: PropTypes.oneOf([
    'tr', 'tl', 'br', 'bl'
  ]),

  /**
   * every time this prop changes the overlay will open/close
   */
  toggleOverlay: PropTypes.bool,

  buttonProps: PropTypes.object,
  overlayProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default NavOverlay
