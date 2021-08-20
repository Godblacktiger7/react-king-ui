import React, { useState } from 'react'

import 'king-ui/Theme/darkblue.css'

import { Input, Text, Button, NavBar, NavBarItem } from 'king-ui'

const App = () => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(0)

  return (
    <>
      <NavBar active={active}>
        <NavBarItem onClick={() => setActive(0)}>Home</NavBarItem>
        <NavBarItem onClick={() => setActive(1)}>About</NavBarItem>
      </NavBar>
      <div className='page'>
        <Button><Text shadow>Button<br />(No Args)</Text></Button>
        <Button shadow><Text>Button<br />(Shadow)</Text></Button>
        <Button
          className='test'
          shadow
        >
          <Text>Button<br />(Shadow)</Text>
        </Button>
        <Input
          text='Your Name ?'
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </div>
    </>
  )
}

export default App
