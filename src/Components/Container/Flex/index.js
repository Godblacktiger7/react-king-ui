import React from 'react'
import PropTypes from 'prop-types'

const Flex = ({
  style,
  justify,
  align,
  flow,
  className,
  children,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexFlow: flow,
        ...style
      }}
      className={`king-ui-flex ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

Flex.defaultProps = {
  justify: 'center',
  align: 'center',
  flow: 'wrap'
}

Flex.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  justify: PropTypes.string,
  align: PropTypes.string,
  flow: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Flex
