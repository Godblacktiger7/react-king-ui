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
  position,
  toggleOverlay,
  children
}) => {
  const [state, setState] = useState(toggleOverlay)

  const init = useRef(true)

  useEffect(() => {
    if (init.current) init.current = false
    else setState(prev => !prev)
  }, [toggleOverlay])

  return (
    <>
      {(state) && (
        <Overlay
          {...{
            ...overlay,
            className: classNames(
              styles.overlay,
              (overlay.className) && overlay.className
            )
          }}
        >
          {children}
        </Overlay>
      )}

      <NavButton
        {...{
          ...button,
          className: classNames(
            styles.navbutton,
            (button.className) && button.className
          ),
          style: {
            ...button.style,
            ...position
          },
          onClick: () => setState(prev => !prev)
        }}
      />
    </>
  )
}

NavOverlay.defaultProps = {
  overlay: {},
  button: {},
  position: { top: '.5rem', right: '.5rem' },
  zIndex: 100,
  toggleOverlay: false
}

NavOverlay.propTypes = {
  /**
   * nav button component props
   */
  button: PropTypes.object,

  /**
   * nav overlay component props
   */
  overlay: PropTypes.object,

  /**
   * button position
   * css: top, right, left, bottom
   */
  position: PropTypes.object,

  /**
   * every time this prop changes the overlay will open/close
   */
  toggleOverlay: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default NavOverlay
