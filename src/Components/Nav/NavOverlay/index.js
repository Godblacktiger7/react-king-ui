import React, {
  useEffect,
  useState,
  useRef,
  useCallback
} from 'react'
import PropTypes from 'prop-types'

import './style.css'

import NavButton from './NavButton'
import Overlay from './Overlay'

// <<- default: NavOverlay
/**
 * ### classNames:
 *  - button: __*king-ui-nav-button*__
 *  - overlay: __*king-ui-nav-overlay*__
 *
 * @component
 */
const NavOverlay = ({
  style,
  navPosition,
  zIndex,
  toggleOverlay,
  buttonProps,
  overlayProps,
  children
}) => {
  const [state, setState] = useState(toggleOverlay)

  const init = useRef(true)

  const navButtonPosition = useCallback(() => {
    return {
      tr: { top: '.5em', right: '.5em' },
      tl: { top: '.5em', left: '.5em' },
      br: { bottom: '.5em', right: '.5em' },
      bl: { bottom: '.5em', left: '.5em' }
    }[navPosition]
  }, [navPosition])

  useEffect(() => {
    if (init.current) init.current = false
    else setState(prev => !prev)
  }, [toggleOverlay])

  return (
    <>
      {(state) && (
        <Overlay
          style={{
            zIndex: zIndex,
            ...style?.overlay
          }}
          {...overlayProps}
        >
          {children}
        </Overlay>
      )}

      <NavButton
        style={{
          zIndex: zIndex,
          ...navButtonPosition(),
          ...style?.button
        }}
        onClick={() => setState(prev => !prev)}
        {...buttonProps}
      />
    </>
  )
}

NavOverlay.defaultProps = {
  navPosition: 'tr',
  zIndex: 100,
  toggleOverlay: false
}

NavOverlay.propTypes = {
  /**
   * { button: {}, overlay: {} }
   */
  style: PropTypes.shape({
    button: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ])
    ),
    overlay: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ])
    )
  }),
  /**
   * 'tr', 'tl', 'br', 'bl'
   */
  navPosition: PropTypes.oneOf([
    'tr', 'tl', 'br', 'bl'
  ]),
  zIndex: PropTypes.number,
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
// ->>

export default NavOverlay
