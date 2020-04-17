import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/DeckAPI'
import { connect } from 'react-redux'
import { getDecksFromStorage } from '../actions'
import styles from './ListStyles'


class List extends Component {
  componentDidMount() {
    this.props.dispatch(getDecksFromStorage())
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.decks ? Object.keys(this.props.decks) : []}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          renderItem={({item}) => (
            <View style={styles.deckStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'SingleDeck',
                { entryId: {newTitle: item} })}
                style={{flex: 1, flexWrap: 'wrap', flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.cardText}>{item}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.cardText}>{this.props.decks[item].questions.length} {this.props.decks[item].questions.length === 1 ? 'card' : 'cards'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(List)
