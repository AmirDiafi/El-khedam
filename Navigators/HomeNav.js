import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from '../Screens/DetailsScreen'
import HomeScreen from '../Screens/HomeScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'

const Stack = createStackNavigator()

class HomeNav extends React.Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    )
  }
}

export default HomeNav
