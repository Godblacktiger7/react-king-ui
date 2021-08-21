import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Text from '../Text'

import styles from './styles.module.css'

/**
 * @typedef {Object} _card
 * @property {string} title
 * @property {string} message
 * @property {string} level - choice: 'info', 'warn', 'error'
 * @property {any} props
 */

/** ref: points to NotifyContainer (per ID) */
const ncRef = {}

// <<- Card
const Card = ({
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
      className={classNames(
        styles.notify,
        (['info', 'warn', 'error'].includes(card?.level))
          ? `king-ui-card-${card.level}`
          : 'king-ui-card'
      )}
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
 * @function
 * @param {(string|PropTypes.node)} title
 * @param {(string|PropTypes.node)} message
 * @param {string} level
 */
export const notify = (
  title,
  message,
  level = 'info',
  {
    id = 'notify',
    ...props
  }
) => {
  const cardID = ncRef[id].cards.current.length
  const card = { id: cardID, title, message, level }

  ncRef[id].addCard((
    <Card key={cardID}
      cardID={cardID}
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
  style = {},
  id = '',
  ...props
}) => {
  const render = useState(false)[1]

  const cards = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    ncRef[id] = {
      container: containerRef,
      /**
       * @param {_card} card
       */
      addCard: (card) => {
        if (!card) throw new Error('param: "card" missing!')
        cards.current.unshift(card)
        render(prev => !prev)
      },
      cards: cards,
      removeCard: (cardID = '') => {
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
      className={styles.container}
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
  id: 'notify'
}

NotifyContainer.propTypes = {
  style: PropTypes.object,

  /** Notify Container ID */
  id: PropTypes.string
}
// ->>

export default NotifyContainer
