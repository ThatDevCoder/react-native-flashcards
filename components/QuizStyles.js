import { StyleSheet } from 'react-native'
import { blue, red, white, offBlack } from '../utils/Colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textLarge: {
    fontSize: 20,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
  },
  colorBlue: {
    backgroundColor: blue,
  },
  colorRed: {
    backgroundColor: red,
  },
})
