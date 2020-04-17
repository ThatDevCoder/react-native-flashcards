import { StyleSheet } from 'react-native'
import { offBlack, limeGreen, yellow } from '../utils/Colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  widthEntry: {
    width: 300,
    fontSize: 30,
    lineHeight: 50,
  },
  border: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: offBlack,
    padding: 8,
    backgroundColor: yellow,
  },
  submissionText: {
    fontSize: 20,
  },
  introText: {
    fontSize: 30,
  }
})
