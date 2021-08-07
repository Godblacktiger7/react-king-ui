import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'

import Button from '../Button/Button.jsx'

const MENUS = [
    'NavMenuBar',
    'NavMenuOverlay',
    'NavMenuRelative'
]

const Nav = ({ style, className, zIndex, fontSize, shadow, position, offset, icon, toggleMenu, children }) => {
    const [open, setOpen] = useState(toggleMenu)
    const init = useRef(true)

    const positions = {
        tr: { top: offset, right: offset },
        tl: { top: offset, left: offset },
        br: { bottom: offset, right: offset },
        bl: { bottom: offset, left: offset }
    }

    if (children) {
        if (MENUS.includes(children.displayName)) {
            throw new Error(`Invalid child for "Nav", expect one of '${MENUS.join('\', \'')}'`)
        }
    }

    useEffect(() => {
        if (init.current) init.current = false
        else setOpen(prev => !prev)
    }, [toggleMenu])

    return (
        <>
            {(open) && children}
            <Button
                style={{
                    position: 'fixed',
                    zIndex: zIndex,
                    fontSize: fontSize || 'unset',
                    fontFamily: 'unset',
                    ...positions[position],
                    ...style
                }}
                className={className}
                shadow={shadow}
                onClick={() => setOpen(prev => !prev)}
            >
                {icon}
            </Button>
        </>
    )
}

Nav.defaultProps = {
    position: 'tr',
    offset: '.5em',
    zIndex: 500,
    fontSize: '1em',
    icon: (<FaAlignRight style={{ fontSize: 'none' }} />),
    toggleMenu: false
}

Nav.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    zIndex: PropTypes.number,
    fontSize: PropTypes.string,
    shadow: PropTypes.bool,
    position: PropTypes.oneOf([
        'tr', 'tl',
        'bl', 'br'
    ]),
    offset: PropTypes.string,
    icon: PropTypes.node.isRequired,
    toggleMenu: PropTypes.bool,
    children: PropTypes.node
}

export default Nav
