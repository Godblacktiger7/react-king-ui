import React from 'react'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'

import Button from '../../Button/Button'

import './NavButton.css'

const NavButton = ({
  style,
  zIndex,
  shadow,
  children,
  ...props
}) => {
  return (
    <div className='king-ui-nav-button'
      style={{
        zIndex,
        ...style
      }}
    >
      <Button
        style={{ fontSize: 'unset' }}
        shadow={shadow}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}

NavButton.defaultProps = {
  children: (<FaAlignRight />),
  shadow: false
}

NavButton.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  ),
  zIndex: PropTypes.number,
  shadow: PropTypes.bool,
  children: PropTypes.node
}

export default NavButton
