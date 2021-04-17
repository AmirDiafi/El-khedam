import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0a500',
    padding: 10,
    flexDirection: 'row',
  },
  logoContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoSubContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    color: '#252525',
    textAlign: 'auto',
  },
})

export default Styles
