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
const Router = ({ active, children }) => {
  const [route, setRoute] = useState()
  const pages = useRef([])

  useEffect(() => {
    pages.current = (children instanceof Array) ? children : [children]
  }, [children])

  useEffect(() => [
    setRoute(() => pages.current.filter(
      child => (
        (child.props.route === active) ||
        (child.type.displayName === active) ||
        (child.type.name === active)
      )
    ))
  ], [active])

  return (
    <>
      {route}
    </>
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
