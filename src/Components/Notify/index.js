import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

// notify container ref <id>: ref to notify container
const ncRef = {}

const levelClassNames = {
  info: 'king-ui-notify king-ui-card-info',
  warn: 'king-ui-notify king-ui-card-warn',
  error: 'king-ui-notify king-ui-card-error'
}

// <<- Card
const Card = ({
  className,
  cardID,
  card,
  timeout,
  ...props
}) => {
  useEffect(() => {
    setTimeout(() => {
      // TODO add timeout handler for remove card from div
      console.log(`@TODO timeout handler for "${cardID}" [timeout: ${timeout}]`)
    }, timeout)
  }, [timeout, cardID])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      className={className}
      {...props}
    >
      {
        (card.title) && (
          <Text
            style={{ margin: '.5em' }}
            fontSize='1.3em'
            shadow
            underline
          >
            {card.title}
          </Text>
        )
      }
      {
        (card.message) && (
          <Text
            style={{ margin: '.5em' }}
            fontSize='.9em'
          >
            {card.message}
          </Text>
        )
      }
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  card: PropTypes.object,
  cardID: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  timeout: PropTypes.number
}
// ->>

// <<- export: func: notify
/**
 * @typedef {Object} Card
 * @property {string} title
 * @property {string} message
 * @property {string} level - choice: 'info', 'warn', 'error'
 * @property {Any} ...props
 */
/**
 * notify function for add notification card to the NotifyContainer
 *
 * @function
 * @param {Card}
 */
export const notify = ({
  title = null,
  message,
  level = 'info',
  id = 'king-ui-notify',
  ...props
} = {}) => {
  const className = levelClassNames[level]

  if (!className) throw new Error(`Unknown level "${level}"`)

  const cardID = ncRef[id].cards.current.length
  const card = { id: cardID, title, message }

  ncRef[id].addCard((
    <Card key={cardID}
      cardID={cardID}
      className={className}
      card={card}
      timeout={6000}
      onClick={() => ncRef[id].removeCard(cardID)}
      {...props}
    />
  ))
}
// ->>

// <<- default: NotifyContainer
/**
 * notification can be added with the notify function
 *
 * @component
 */
const NotifyContainer = ({
  style,
  id,
  ...props
}) => {
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

          if (card.props.cardID === cardID) {
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
        display: (cards.current.length)
          ? 'flex'
          : 'none',
        ...style
      }}
      ref={containerRef}
      {...props}
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
// ->>

export default NotifyContainer
