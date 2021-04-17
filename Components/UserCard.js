import React from 'react'
import {Text, Image, TouchableNativeFeedback, View} from 'react-native'
import Styles from './Stylesheets/UserCardStyles'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Subheading} from 'react-native-paper'

class UserCard extends React.Component {
  render() {
    const {data, navigation} = this.props
    return (
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('UserProfile', data)}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#f0a500', '#e45826']}
          style={Styles.container}>
          <View>
            <View style={Styles.userContent}>
              <Image
                style={Styles.image}
                source={{
                  uri:
                    'https://drive.google.com/uc?export=view&id=1eJb2Cl35Y-Ctx3x8UkDXtBV9owrvAjQx',
                }}
              />
              <Text style={Styles.title}> Amir Diafi </Text>
            </View>
            <View
              style={{
                ...Styles.userContent,
                flexDirection: 'row',
              }}>
              <Subheading style={{marginRight: 5}}>33</Subheading>
              <Ionicons color="gold" name="star" size={23} />
            </View>
          </View>
        </LinearGradient>
      </TouchableNativeFeedback>
    )
  }
}

export default UserCard
