import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import styles from './DeckStyles'


class Deck extends Component {
  state = {
    opacity: new Animated.Value(0)
  }
  /* The information related to animation provided in the following
   * function is heavily based on the React video about Animations in
   * the React Native course, Lesson 5, Native Features */
  componentDidMount() {
    const { opacity } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1200 })
      .start()
  }
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.newTitle
    return {
      title: strId
    }
  }
  render() {
    const { opacity } = this.state
    let currDeck = this.props.deck

    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.textStyleBig}>{currDeck.title}</Text>
        <Text style={styles.textStyle}>
          {currDeck.questions.length} {currDeck.questions.length === 1 ? 'card' : 'cards'}
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'NewCard',
          { entryId: {newTitle: this.props.entryId.newTitle} })}>
          <Text style={[styles.textStyle, styles.border, styles.colorBlue]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'Quiz',
          { entryId: {newTitle: this.props.entryId.newTitle} })}>
          <Text style={[styles.textStyle, styles.border, styles.colorRed]}>Quiz</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}


function mapStateToProps(state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    entryId,
    deck: state.decks[entryId.newTitle]
  }
}

export default connect(mapStateToProps)(Deck)
