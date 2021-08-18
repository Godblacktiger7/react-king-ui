import React from 'react'

import 'king-ui/Theme/darkblue.css'

import { Root, Flex, Text, Button } from 'king-ui'

const App = () => {
  return (
    <Root>
      <Flex>
        <Button><Text>Button<br />(No Args)</Text></Button>
        <Button shadow><Text>Button<br />(Shadow)</Text></Button>
        <Button><Text>Button<br />(No Args)</Text></Button>
        <Button shadow><Text>Button<br />(Shadow)</Text></Button>
        <Button><Text>Button<br />(No Args)</Text></Button>
        <Button shadow><Text>Button<br />(Shadow)</Text></Button>
        <Button><Text>Button<br />(No Args)</Text></Button>
        <Button shadow><Text>Button<br />(Shadow)</Text></Button>
        <Button><Text>Button<br />(No Args)</Text></Button>
      </Flex>
    </Root>
  )
}

export default App
