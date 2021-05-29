import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createJitsiConfig, initJitsi } from './JitsiFunctions'

export const JitsiConferenceComponent = (props) => {
  const [jitsi, setJitsi] = useState({})

  useEffect(() => {
    initJitsi(setJitsi, createJitsiConfig(props))
    return () => jitsi?.dispose?.()
  }, [])

  return (
    <div id='jitsi-container-id' style={{ height: '100vh', width: '100%' }} />
  )
}

JitsiConferenceComponent.propTypes = {
  admin: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  roomName: PropTypes.string.isRequired,
  jitsiConfig: PropTypes.object
}
