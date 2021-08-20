import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

/**
 * React Button Component
 *
 * ### Theme variables in use:
 *  - --btn-color
 *  - --btn-bg
 *  - --btn-border
 *  - --btn-border-radius
 *  - --btn-box-shadow
 *  - :hover
 *    - --filter-hover
 *  - :focus
 *    - --filter-focus
 *  - :active
 *    - --filter-active
 *  - :disabled
 *    - --filter-disabled
 *
 * @component
 */
const Button = ({
  style,
  className,
  shadow,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      style={style}
      className={classNames(
        styles.btn,
        (shadow) && styles.shadow,
        (className) && className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  className: PropTypes.string,

  /**
   * Enable Box Shadow
   */
  shadow: PropTypes.bool,

  /**
   * Disable Button
   */
  disabled: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object.node),
    PropTypes.node.isRequired
  ])
}

export default Button
