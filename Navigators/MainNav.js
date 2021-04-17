import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeNav from './HomeNav'
import ProfileScreen from '../Screens/ProfileScreen'
import AllScreen from '../Screens/AllScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StatusBar} from 'react-native'

const Tab = createMaterialBottomTabNavigator()

class MainNav extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#f0a500" />
        <Tab.Navigator shifting={true}>
          <Tab.Screen
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Ionicons name="ios-home-outline" color={color} size={26} />
              ),
              tabBarColor: '#f0a500',
            }}
            name="HomeNav"
            component={HomeNav}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Discover',
              tabBarIcon: ({color}) => (
                <Ionicons name="ios-glasses-outline" color={color} size={26} />
              ),
              tabBarColor: '#ffbe0f',
            }}
            name="All"
            component={AllScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <Ionicons name="ios-person-outline" color={color} size={26} />
              ),
              tabBarColor: '#e45826',
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      </>
    )
  }
}

export default MainNav
