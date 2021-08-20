import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

/**
 * ToggleSwitch Button (enable/disable)
 *
 * ### Theme variables in use:
 *  * ...
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
      className={classNames(
        styles.switch,
        (className) && className
      )}
      {...props}
    >
      <input
        className={styles.input}
        type='checkbox'
        checked={isToggled}
        onChange={onChange}
      />
      <span className={styles.span} />
    </label>
  )
}

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onChange: PropTypes.func
}

export default ToggleSwitch
