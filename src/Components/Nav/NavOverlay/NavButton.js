import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'

import Button from '../../Button'

// <<- default: NavButton
const NavButton = ({
  style,
  ...props
}) => {
  return (
    <div className='king-ui-nav-button'
      style={{
        ...style
      }}
    >
      <Button
        {...props}
      >
        <FaBars style={{ fontSize: 'inherit' }} />
      </Button>
    </div>
  )
}

NavButton.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  )
}
// ->>

export default NavButton
