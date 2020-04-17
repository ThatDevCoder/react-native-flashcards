import { StyleSheet } from 'react-native'
import { offBlack } from '../utils/Colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  info: {
    fontSize: 30,
    textAlign: 'center'
  },
  inputOption: {
    flexDirection: 'row',
    width: 300,
    fontSize: 30,
    lineHeight: 50,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
    fontSize: 20,
  }
})
