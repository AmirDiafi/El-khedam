import React from 'react'
import {View, FlatList} from 'react-native'
import Header from '../Components/Header'
import UserCard from '../Components/UserCard'

class DetailsScreen extends React.Component {
  componentDidMount() {
    const {route} = this.props
    console.log(route.params)
    // fetch('')
    //   .then((result) => result.json())
    //   .then((result) => {
    //     this.setState({
    //       data: result.filter((item) => item.type === route.params.title),
    //     })
    //   })
  }

  render() {
    const {route, navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <Header title={route?.params?.titleInArabic} navigation={navigation} />
        <View
          style={{
            paddingHorizontal: 10,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={[1, 2, 3, 4]}
            renderItem={({item}) => (
              <UserCard navigation={this.props.navigation} data={item} />
            )}
          />
        </View>
      </View>
    )
  }
}

export default DetailsScreen
