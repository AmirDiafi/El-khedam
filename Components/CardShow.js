import React from 'react'
import {Text, Image, TouchableNativeFeedback} from 'react-native'
import Styles from './Stylesheets/CardShowStyles'
import LinearGradient from 'react-native-linear-gradient'

class CardShow extends React.Component {
  render() {
    const {data, navigation} = this.props
    return (
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('Details', data)}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#f0a500', '#e45826']}
          style={Styles.container}>
          <Image style={Styles.image} source={{uri: data.imageSource}} />
          <Text style={Styles.title}>{data.titleInArabic} </Text>
        </LinearGradient>
      </TouchableNativeFeedback>
    )
  }
}

export default CardShow
