const loadJitsiAPI = () => {
  let resolver = null

  const onloadPromise = new Promise((resolve) => {
    resolver = resolve
  })

  const script = document.createElement('script')
  script.src = 'https://meet.jit.si/external_api.js'
  script.async = true
  script.onload = () => resolver()
  document.body.appendChild(script)
  return onloadPromise
}

export const initJitsi = async (setJitsi, jitsiConfig) => {
  await loadJitsiAPI()
  setJitsi(createJistiMeet(jitsiConfig))
}

const createJistiMeet = (jitsiConfig) => {
  return new window.JitsiMeetExternalAPI('meet.jit.si', jitsiConfig)
}

export const createJitsiConfig = (props, toolbarButtons) => {
  const defaultConfig = defaultJitsiConfig({
    roomName: props.roomName,
    displayName: props.displayName,
    toolbarButtons: toolbarButtons
  })

  if (!props.config) {
    return defaultConfig
  }

  return {
    ...defaultConfig,
    ...props.config
  }
}

const defaultJitsiConfig = ({ roomName, displayName, toolbarButtons }) => {
  return {
    roomName: roomName,
    userInfo: {
      displayName: displayName
    },
    configOverwrite: {
      hideConferenceSubject: true,
      enableNoisyMicDetection: false,
      prejoinPageEnabled: false
    },
    interfaceConfigOverwrite: {
      TOOLBAR_BUTTONS: toolbarButtons,
      TOOLBAR_ALWAYS_VISIBLE: false
    },
    parentNode: document.getElementById('jitsi-container-id')
  }
}
