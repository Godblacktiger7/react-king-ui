import React from 'react'
import PropTypes from 'prop-types'

// <<- default: ToggleSwitch
/**
 * ToggleSwitch Button (enable/disable)
 *
 * @component
 */
const ToggleSwitch = ({
  className,
  isToggled,
  onChange,
  ...props
}) => {
  return (
    <label
      className={`king-ui-toggle-switch ${className || ''}`}
      {...props}
    >
      <input
        type='checkbox'
        checked={isToggled}
        onChange={onChange}
      />
      <span />
    </label>
  )
}

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onChange: PropTypes.func
}
// ->>

export default ToggleSwitch
