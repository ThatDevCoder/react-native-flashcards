import { StyleSheet } from 'react-native'
import { limeGreen, offBlack, blue, red } from '../utils/Colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20
  },
  textStyleBig: {
    fontSize: 30
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
    fontSize: 20,
  },
  colorBlue: {
    backgroundColor: blue,
  },
  colorRed: {
    backgroundColor: red,
  }
})
