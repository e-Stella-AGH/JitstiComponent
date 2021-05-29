import React from 'react'
import { JitsiConferenceComponent } from './JitsiConferenceComponent'

export const JitsiComponent = (props) => {
  return (
    <div>
      <JitsiConferenceComponent admin={false} displayName="whoever" roomName="xd"/>
    </div>
  )
}
