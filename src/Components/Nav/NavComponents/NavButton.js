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
    <Button className='king-ui-nav-button'
      style={{
        zIndex,
        ...style
      }}
      shadow={shadow}
      {...props}
    >
      {children}
    </Button>
  )
}

NavButton.defaultProps = {
  children: (<FaAlignRight />),
  shadow: false
}

NavButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  zIndex: PropTypes.number,
  shadow: PropTypes.bool,
  children: PropTypes.node
}

export default NavButton
