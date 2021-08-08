import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './notify.min.css'

import Text from '../Text/Text.jsx'

// notify container ref <id>: ref to notify container
const ncRef = {}
const levels = {
    info: 'king-ui-notify--info king-ui-card--info',
    warn: 'king-ui-notify--warn king-ui-card--warn',
    error: 'king-ui-notify--error king-ui-card--error'
}

const Card = ({ className, card, timeout, onClick, ...props }) => {
    useEffect(() => {
        setTimeout(() => {
            // ...
        }, timeout)
    }, [timeout])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
            className={className}
            onClick={onClick}
            {...props}
        >
            {(card.title) && <Text style={{ margin: '.5em' }} fontSize='1.3em' shadow underline>{card.title}</Text>}
            {(card.message) && <Text style={{ margin: '.5em' }} fontSize='.9em'>{card.message}</Text>}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    card: PropTypes.object,
    timeout: PropTypes.number,
    onClick: PropTypes.func
}

export const notify = ({ title = null, message, level = 'info', id = 'king-ui-notify', ...props } = {}) => {
    const className = levels[level]

    if (!className) throw new Error(`Unknown level "${level}"`)

    const cardID = ncRef[id].cards.current.length
    const card = { id: cardID, title, message }

    ncRef[id].addCard((
        <Card key={cardID}
            cardid={cardID}
            className={className}
            card={card}
            timeout={6000}
            onClick={() => ncRef[id].removeCard(cardID)}
            {...props}
        />
    ))
}

const NotifyContainer = ({ style, id, ...props }) => {
    const render = useState(false)[1]

    const cards = useRef([])
    const containerRef = useRef(null)

    useEffect(() => {
        ncRef[id] = {
            container: containerRef,
            addCard: (card) => {
                cards.current.unshift(card)
                render(prev => !prev)
            },
            cards: cards,
            removeCard: (cardID) => {
                let index = -1

                for (const card of cards.current) {
                    index++

                    if (card.props.cardid === cardID) {
                        break
                    }
                }

                cards.current.splice(index, 1)
                render(prev => !prev)
            }
        }

        return () => {
            delete ncRef[id]
        }
    }, [id])

    return (
        <div
            id={id}
            style={{
                display: (cards.current.length) ? 'flex' : 'none',
                position: 'absolute',
                flexDirection: 'column',
                overflowY: 'auto',
                zIndex: 999,
                width: '100%',
                maxWidth: '30ch',
                ...style
            }}
            ref={containerRef}
        >
            {cards.current}
        </div>
    )
}

NotifyContainer.defaultProps = {
    id: 'king-ui-notify'
}

NotifyContainer.propTypes = {
    style: PropTypes.object,
    id: PropTypes.string
}

export default NotifyContainer
