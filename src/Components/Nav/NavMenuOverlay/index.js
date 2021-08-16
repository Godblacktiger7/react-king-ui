import React, {
  useEffect,
  useState,
  useRef,
  useCallback
} from 'react'
import PropTypes from 'prop-types'

import NavButton from './NavButton'
import Overlay from './Overlay'

// <<- default: NavMenuOverlay
const NavMenuOverlay = ({
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

NavMenuOverlay.defaultProps = {
  navPosition: 'tr',
  zIndex: 100,
  toggleOverlay: false
}

NavMenuOverlay.propTypes = {
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
  navPosition: PropTypes.oneOf([
    'tr', 'tl', 'br', 'bl'
  ]),
  zIndex: PropTypes.number,
  toggleOverlay: PropTypes.bool,
  buttonProps: PropTypes.object,
  overlayProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
// ->>

export default NavMenuOverlay
