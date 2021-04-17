import React from 'react'
import {Text, View} from 'react-native'

class UserProfileScreen extends React.Component {
  render() {
    console.log('from User Profile ', this.props.route.params)
    return (
      <View>
        <Text>UserProfileScreen</Text>
      </View>
    )
  }
}

export default UserProfileScreen
