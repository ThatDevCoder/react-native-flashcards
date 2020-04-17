import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, ToastAndroid } from 'react-native'
import { saveDeckTitle, getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { addDeck, addDeckToStorage, addCardToDeckLocally, addCardToStorage } from '../actions'
import styles from './AddCardStyle'
import { pineGreen } from '../utils/Colors'


class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: '',
  }

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    let strId = entryId.newTitle
    return {
      title: `Add Card To '${strId}'`
    }
  }

  handleQuestionChange = (newInput) => {
    this.setState({
      questionInput: newInput
    })
  }

  handleAnswerChange = (newInput) => {
    this.setState({
      answerInput: newInput
    })
  }

  submit = () => {
    let { questionInput, answerInput } = this.state
    if(!questionInput) {
      alert("Please provide a question for the card")
    } else if (!answerInput) {
      alert("Please provide an answer for the card")
    } else {
      this.props.dispatch(addCardToDeckLocally(this.props.deck.title, questionInput, answerInput))
      this.props.dispatch(addCardToStorage(this.props.deck.title, questionInput, answerInput))
      this.setState({
        questionInput: '',
        answerInput: '',
      })
      ToastAndroid.show('Your new card was added!', ToastAndroid.SHORT)
    }
  }

  render() {
    let { questionInput, answerInput } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.introText}>Add A Card!</Text>
        <TextInput style={styles.widthEntry} value={questionInput} placeholder='Question'
          placeholderTextColor={pineGreen} onChangeText={this.handleQuestionChange}/>
        <TextInput style={styles.widthEntry} value={answerInput} placeholder='Answer'
          placeholderTextColor={pineGreen} onChangeText={this.handleAnswerChange}/>
        <TouchableOpacity style={styles.border} onPress={this.submit}>
          <Text style={styles.submissionText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}


function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    deck: state.decks[entryId.newTitle],
  }
}

export default connect(mapStateToProps)(AddCard)
