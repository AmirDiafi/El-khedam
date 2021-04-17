import React from 'react'
import {Image, Text, TouchableNativeFeedback, View} from 'react-native'
import Styles from './Stylesheets/HeaderStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Header extends React.Component {
  render() {
    const {title, isHome, navigation} = this.props
    return (
      <View style={Styles.container}>
        {isHome ? (
          <View style={Styles.logoContent}>
            <Image
              style={Styles.logo}
              source={require('../Assets/images/web_hi_res_512.png')}
            />
            <Text style={Styles.title}> {title} </Text>
          </View>
        ) : (
          <View style={Styles.logoSubContent}>
            <TouchableNativeFeedback onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={23} />
            </TouchableNativeFeedback>
            <Text style={Styles.title}> {title} </Text>
          </View>
        )}
      </View>
    )
  }
}

export default Header
