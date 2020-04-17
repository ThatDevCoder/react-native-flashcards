import { getDecks, saveDeckTitle, addCardToDeck, setUpDecks } from '../utils/DeckAPI'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_DECK_TO_STORAGE = 'ADD_DECK_TO_STORAGE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const SEND_CARD = 'SEND_CARD'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const getDecksFromStorage = () => dispatch => (
  setUpDecks()
  .then(() => {
    getDecks()
    .then((results) => {
      dispatch(receiveDecks(JSON.parse(results)))
    })
  })
)

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function sendDeckToStorage(deck) {
  return {
    type: ADD_DECK_TO_STORAGE,
    deck,
  }
}

export const addDeckToStorage = (deck) => dispatch => {
  saveDeckTitle(deck)
}

export function addCardToDeckLocally(deckTitle, question, answer) {
  return {
    type: ADD_CARD_TO_DECK,
    deck: deckTitle,
    question,
    answer,
  }
}

export function sendCard(card) {
  return {
    type: SEND_CARD,
    card,
  }
}

export const addCardToStorage = (deckTitle, question, answer) => dispatch => (
  addCardToDeck(deckTitle, { question, answer })
)
