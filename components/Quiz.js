import React, { Component } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'
import styles from './QuizStyles'


class Quiz extends Component {
  state = {
    currentCard: 0,
    covered: true,
    correct: 0,
    incorrect: 0,
  }

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.newTitle
    return {
      title: `Quiz On '${strId}'`
    }
  }

  getAnswer = () => {
    this.setState({
      covered: false,
    })
  }

  markCorrect = () => {
    this.setState((prevState) => ({
      covered: true,
      currentCard: prevState.currentCard + 1,
      correct: prevState.correct + 1,
    }))
  }

  markIncorrect = () => {
    this.setState((prevState) => ({
      covered: true,
      currentCard: prevState.currentCard + 1,
      incorrect: prevState.incorrect + 1,
    }))
  }

  reset = () => {
    this.setState({
      covered: true,
      currentCard: 0,
      correct: 0,
      incorrect: 0,
    })
    clearLocalNotification()
      .then(setLocalNotification)
  }

  goBackToDeck = () => {
    this.props.goBack()
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    let cards = this.props.deck.questions
    let { currentCard, covered, correct, incorrect } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Cards Remaining: {cards.length - currentCard}
        </Text>
        {currentCard < cards.length ?
          (
            <View style={styles.container}>
              <Text style={styles.textLarge}>
                {cards[currentCard].question}
              </Text>
              <TouchableOpacity onPress={this.getAnswer}>
                <Text>
                  {covered ? 'Show Answer' : cards[currentCard].answer}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.markCorrect}>
                <Text style={[styles.textLarge, styles.border, styles.colorBlue]}>
                  Correct
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.markIncorrect}>
                <Text style={[styles.textLarge, styles.border, styles.colorRed]}>
                  Incorrect
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.container}>
              <Text>
                You scored {correct} out of {cards.length}!
              </Text>
              <TouchableOpacity style={[styles.border, styles.colorBlue]} onPress={this.reset}>
                <Text style={styles.textLarge}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.border, styles.colorRed]} onPress={this.goBackToDeck}>
                <Text style={styles.textLarge}>Go Back To Deck</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    deck: state.decks[entryId.newTitle],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    goBack: () => navigation.goBack(),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
