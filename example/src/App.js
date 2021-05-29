import React from 'react'

import { JitsiComponent } from 'e-stella-jitsi'
import 'e-stella-jitsi/dist/index.css'

const App = () => {
  return <JitsiComponent displayName="displayName" roomName="roomName" admin={true} />
}

export default App
