# e-stella-jitsi

> Jitsi Component for e-Stella project

[![NPM](https://img.shields.io/npm/v/e-stella-jitsi.svg)](https://www.npmjs.com/package/e-stella-jitsi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save e-stella-jitsi
```

## Usage

```jsx
import React from 'react'

import { JitsiComponent } from 'e-stella-jitsi'

class Example extends Component {
  render() {
    return <JitsiComponent displayName="displayName" roomName="roomName" admin={true} />
  }
}
```

### Props

| Prop  |  Type |  Meaning | Is Required |
|---|---|---|---|
| displayName  |  string |  Display name of attendee of the meeting | Yes|
|roomName   | string  | Room Name of the meeting  | Yes |
| admin | boolean | If current attendee should have admin rights (see below) | Yes |
| jitsiConfig | object | Custom Jisti config (see below) | No |

### Admin rights
If attendee is an admin, they have full rights in the meeting, eg. change
background, mute everyone else, etc. To see all their options, see
`buttonsConfigs.js` file.

### Custom Jitsi config
Here, we use default Jitsi configuration file (room name, display name
and buttons excluded). You can also give your own config object if
you feel that our isn't enough for your needs.

## License

MIT © [Davenury](https://github.com/Davenury)
