import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'

import Button from '../../Button'

const NavButton = ({
  style,
  className,
  ...props
}) => {
  console.log({ style, className, props })
  return (
    <div className={className} style={style}>
      <Button {...props}>
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
  ),
  className: PropTypes.string
}

export default NavButton
