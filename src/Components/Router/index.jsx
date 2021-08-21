import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * Router for switching pages
 *
 * > active (prop) has to match:
 * >   - props.route (children prop)
 * >   - name (node)
 * >   - displayName (node)
 *
 * @component
 */
const Router = ({ active, children, ...props }) => {
  const [route, setRoute] = useState()
  const pages = useRef([])

  useEffect(() => {
    pages.current = (children instanceof Array) ? children : [children]
  }, [children])

  useEffect(() => {
    setRoute(() => {
      for (const child of pages.current) {
        if ([child.props.route, child.type.displayName, child.type.name].includes(active)) {
          return child
        }
      }
    })
  }, [active])

  return (
    <div {...props}>
      {route}
    </div>
  )
}

Router.propTypes = {
  /**
   * active node
   */
  active: PropTypes.string.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node.isRequired),
    PropTypes.node.isRequired
  ])
}

export default Router
