import { createJitsiConfig } from './JitsiFunctions'

describe('Jitsi Config', () => {
  it('creates default jitsi config', () => {
    const props = createProps(false)
    const config = createJitsiConfig(props)

    expect(config).toStrictEqual({
      roomName: 'roomName',
      userInfo: {
        displayName: 'displayName'
      },
      configOverwrite: {
        hideConferenceSubject: true,
        enableNoisyMicDetection: false,
        prejoinPageEnabled: false
      },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone',
          'camera',
          'chat',
          'settings',
          'desktop',
          'hangup'
        ],
        TOOLBAR_ALWAYS_VISIBLE: false
      },
      parentNode: document.getElementById('jitsi-container-id')
    })
  })

  it('creates config out of config object', () => {
    const config = {
      roomName: 'roomName',
      userInfo: {
        displayName: 'displayName'
      },
      configOverwrite: {
        hideConferenceSubject: true,
        enableNoisyMicDetection: true,
        prejoinPageEnabled: false
      },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: ['microphone', 'camera', 'chat'],
        TOOLBAR_ALWAYS_VISIBLE: false
      },
      parentNode: 'parentNode'
    }

    const jitsiConfig = createJitsiConfig({
      config: config
    })

    expect(jitsiConfig).toStrictEqual(config)
  })

  it('creates config out of one filed from config prop', () => {
    const config = {
      roomName: 'newRoomName',
      parentNode: 'newParentNode'
    }

    const props = createProps(false)
    props.config = config
    const jitsiConfig = createJitsiConfig(props)

    expect(jitsiConfig).toStrictEqual({
      roomName: 'newRoomName',
      userInfo: {
        displayName: 'displayName'
      },
      configOverwrite: {
        hideConferenceSubject: true,
        enableNoisyMicDetection: false,
        prejoinPageEnabled: false
      },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone',
          'camera',
          'chat',
          'settings',
          'desktop',
          'hangup'
        ],
        TOOLBAR_ALWAYS_VISIBLE: false
      },
      parentNode: 'newParentNode'
    })
  })
})

const createProps = (
  admin,
  roomName = 'roomName',
  displayName = 'displayName'
) => {
  return {
    admin: admin,
    roomName: roomName,
    displayName: displayName
  }
}
