import React, { useState } from 'react'

import 'king-ui/Theme/darkblue.css'

import { Root, NavBar, NavBarItem } from 'king-ui'

const App = () => {
  const [active, setActive] = useState(1)

  return (
    <Root>
      <NavBar active={active}>
        <NavBarItem onClick={() => setActive(0)}>Home</NavBarItem>
        <NavBarItem onClick={() => setActive(1)}>News</NavBarItem>
        <NavBarItem onClick={() => setActive(2)}>Contact</NavBarItem>
        <NavBarItem onClick={() => setActive(3)}>About</NavBarItem>
      </NavBar>
    </Root>
  )
}

export default App
