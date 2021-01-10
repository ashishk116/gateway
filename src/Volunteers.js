import React from 'react'
import {Text} from 'react-native'

import { WebView } from 'react-native-webview';

const Volunteers=()=>{
return(
    <WebView
    source={{
      uri: 'https://www.gatewayctr.org/volunteer/'
    }}
    style={{ marginTop: 20 }}
  />
)
}

export default Volunteers;