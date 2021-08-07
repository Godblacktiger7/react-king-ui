import React from 'react'
import PropTypes from 'prop-types'

const NavMenuOverlay = ({ style, className, zIndex, space, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                position: 'fixed',
                zIndex: zIndex,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 'unset',
                fontFamily: 'unset',
                background: 'var(--theme-nav-background)',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                ...style
            }}
            className={className}
        >
            {(children instanceof Array)
                ? (children.map((child, idx) => {
                        return (
                            <div key={idx} style={{ padding: space }}>
                                {child}
                            </div>
                        )
                    }))
                : children}
        </div>
    )
}

NavMenuOverlay.defaultProps = {
    zIndex: 500,
    space: '1em'
}

NavMenuOverlay.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    zIndex: PropTypes.number,
    space: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node.isRequired),
        PropTypes.node.isRequired
    ])
}

export default NavMenuOverlay
