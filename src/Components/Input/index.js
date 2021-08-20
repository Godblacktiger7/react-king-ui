import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Text from '../Text'

import styles from './styles.module.css'

/**
 * Custom Input Field
 *
 * ### Theme variables in use:
 *  - --input-color
 *  - --input-bg
 *  - --input-border
 *  - --input-border-bottom
 *  - --input-border-radius
 *
 * @component
 */
const Input = ({
  style,
  className,
  type,
  text,
  value,
  fontSize,
  ...props
}) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        ...style?.div
      }}
      className={classNames(
        styles.input,
        (className) && className
      )}
    >
      <input
        style={{ ...style?.input }}
        type={type}
        value={value}
        {...props}
      />
      <Text
        style={{ ...style?.text }}
        shadow={(value) ? true : ((value === 0) || false)}
      >
        {text}
      </Text>
    </div>
  )
}

Input.defaultProps = {
  fontSize: 'unset',
  type: 'text'
}

Input.propTypes = {
  /**
   * div, input, text
   */
  style: PropTypes.shape({
    div: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])),
    input: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])),
    text: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]))
  }),
  className: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontSize: PropTypes.string
}

export default Input
