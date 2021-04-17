import React from 'react'
import {Image, View} from 'react-native'

class LoadingScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ddd',
        }}>
        <Image
          style={{width: 100, height: 100, borderRadius: 100}}
          source={require('../Assets/images/web_hi_res_512.png')}
        />
      </View>
    )
  }
}

export default LoadingScreen
