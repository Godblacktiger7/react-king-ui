import React from 'react'
import PropTypes from 'prop-types'

import 'king-ui/Theme/DarkBlue.css'

import { Root, Flex, Text } from 'king-ui'

const Box = ({ nr }) => {
  return (
    <div className='test-box'>
      <Text>test box {nr}</Text>
    </div>
  )
}

Box.propTypes = {
  nr: PropTypes.number
}

const App = () => {
  return (
    <Root>
      <Flex>
        <Box nr={1} />
        <Box nr={2} />
        <Box nr={3} />
        <Box nr={4} />
        <Box nr={5} />
        <Box nr={6} />
        <Box nr={7} />
        <Box nr={8} />
        <Box nr={9} />
        <Box nr={10} />
        <Box nr={11} />
        <Box nr={12} />
        <Box nr={13} />
        <Box nr={14} />
        <Box nr={15} />
        <Box nr={16} />
        <Box nr={17} />
        <Box nr={18} />
        <Box nr={19} />
        <Box nr={20} />
      </Flex>
    </Root>
  )
}

export default App
