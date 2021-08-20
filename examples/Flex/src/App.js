import React from 'react'

import 'king-ui/Theme/darkblue.css'

import { Text, Button } from 'king-ui'

const App = () => {
  return (
    <div className='flex'>
      <Button><Text>Button<br />(No Args)</Text></Button>
      <Button shadow><Text>Button<br />(Shadow)</Text></Button>
      <Button><Text>Button<br />(No Args)</Text></Button>
      <Button shadow><Text>Button<br />(Shadow)</Text></Button>
      <Button><Text>Button<br />(No Args)</Text></Button>
      <Button shadow><Text>Button<br />(Shadow)</Text></Button>
      <Button><Text>Button<br />(No Args)</Text></Button>
      <Button
        className='test'
        shadow
      >
        <Text>Button<br />(Shadow)</Text>
      </Button>
      <Button><Text>Button<br />(No Args)</Text></Button>
    </div>
  )
}

export default App
