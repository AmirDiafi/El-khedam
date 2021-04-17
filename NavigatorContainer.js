import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from './Screens/SplashScreen'
import LoadingScreen from './Screens/LoadingScreen'
import MainNav from './Navigators/MainNav'
import {StatusBar} from 'react-native'

const Stack = createStackNavigator()

class NavigatorContainer extends React.Component {
  state = {
    isFirstTime: false,
    isLoaded: false,
  }

  componentDidMount() {
    AsyncStorage.getItem('isFirstTime')
      .then((res) => this.setState({isFirstTime: res}))
      .then(() => this.setState({isLoaded: true}))
  }

  render() {
    const {isFirstTime, isLoaded} = this.state
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {isFirstTime ? (
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Main" component={MainNav} />
            </>
          ) : isLoaded ? (
            <Stack.Screen name="Main" component={MainNav} />
          ) : (
            <Stack.Screen name="LoadScreen" component={LoadingScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default NavigatorContainer
