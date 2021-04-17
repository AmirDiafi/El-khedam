import React from 'react'
import {FlatList, View} from 'react-native'
import CardShow from '../Components/CardShow'
import Header from '../Components/Header'
class HomeScreen extends React.Component {
  state = {
    data: [
      {
        id: '0',
        title: 'berber',
        titleInArabic: 'حلاق',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1ozbV-jIBoYFu1nS5CaFhYrP_z236Mu3d',
      },
      {
        id: '1',
        title: 'chef',
        titleInArabic: 'طباخ',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1zC3j2PVhNLKGreBwZcNMl-pNP_jjWuHH',
      },
      {
        id: '2',
        title: 'Carpenter',
        titleInArabic: 'نجار',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1GZ2zyu_9bZ7Cndo8pEIundp-1hi_Ng35',
      },
      {
        id: '3',
        title: 'Mechanical',
        titleInArabic: 'ميكانيكي',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1ViIpAYBpzGCwlFq8966huxOs3F8FT7DF',
      },
      {
        id: '4',
        title: 'Builder',
        titleInArabic: 'بناء',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1Y3gWzYPyWNL8uxvId6Q1IMMjSD-AovEY',
      },
      {
        id: '5',
        title: 'Welder',
        titleInArabic: 'لحام',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1GPzsT2lC91EA6RUQV0xMioz3R3QvNFoA',
      },
      {
        id: '6',
        title: 'butcher',
        titleInArabic: 'جزار',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1BARtrPS5nEeKITAUtzS6PH0kPGIF4KfX',
      },
      {
        id: '7',
        title: 'Decorator',
        titleInArabic: 'مزخرف',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1ET3sMr_Sx-oBaHu-Q_AXUfxfiliiOI8L',
      },
      {
        id: '8',
        title: 'Plumber',
        titleInArabic: 'سباك',
        imageSource:
          'https://drive.google.com/uc?export=view&id=1RxAY7VpURa_0-3zZiK4uyY24NXPrsZXz',
      },
    ],
  }

  render() {
    const {data} = this.state
    const {navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <Header title="El Khedam" isHome navigation={navigation} />
        <View style={{padding: 10, flex: 1}}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({item}) => (
              <CardShow navigation={this.props.navigation} data={item} />
            )}
          />
        </View>
      </View>
    )
  }
}

export default HomeScreen
