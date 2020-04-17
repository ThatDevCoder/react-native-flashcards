import { StyleSheet } from 'react-native'
import { limeGreen, paleWhite } from '../utils/Colors'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: limeGreen,
    padding: 15,
  },
  deckStyle: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: paleWhite,
    padding: 15,
  },
  cardText: {
    fontSize: 25,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  }
});
