import { RECEIVE_DECKS, ADD_DECK, ADD_DECK_TO_STORAGE, ADD_CARD_TO_DECK, SEND_CARD } from '../actions'


function entries (state = {decks: {}}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case ADD_DECK:
      return {
        decks: {
          ...state.decks,
          [action.deck]: {
            title: action.deck,
            questions: [],
          },
        }
      }
    case ADD_DECK_TO_STORAGE:
      return state
    case ADD_CARD_TO_DECK:
      let oldQuestionSet = state.decks[action.deck].questions
      oldQuestionSet.push({ question: action.question, answer: action.answer })
      return {
        decks: {
          ...state.decks,
          [action.deck]: {
            title: action.deck,
            questions: oldQuestionSet
          },
        }
      }
    case SEND_CARD:
      return state
    default:
      return state
  }
}

export default entries
