import { AsyncStorage } from 'react-native'

// MobileFlashcardsDeck
let DECKS_STORAGE_KEY = 'MobileFlawutqhmzdqgluxjbtikr'

/* The deck itself is kept as an object of deck topics/subjects. */


export function setUpDecks() {
  let spanishDeck = {
    Spanish: {
      title: 'Spanish',
      questions: [
        { question: "What does 'hola' mean?", answer: "Hello" },
        { question: "What does 'adios' mean?", answer: "Goodbye" },
        { question: "What does 'la manzana' mean?", answer: "The Apple" },
        { question: "What does 'la fruta' mean?", answer: "The Fruit" },
        { question: "What does 'trabajo' mean?", answer: "Work" },
        { question: "What does 'buenas tardes' mean?", answer: "Good Afternoon" },
        { question: "What does 'la naranja' mean?", answer: "The Orange" },
        { question: "What does 'el gato' mean?", answer: "The Cat" },
        { question: "What does 'el fuego' mean?", answer: "The Fire" },
      ]
    },
    Architecture: {
      title: 'Architecture',
      questions: [
        { question: "What famous structure in Rome was once used for gladiatorial fights?", answer: "The Colosseum" },
        { question: "What is the total length of the roadway of the Brooklyn Bridge?", answer: "5989 feet" }
      ]
    }
  }
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(spanishDeck))
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function saveDeckTitle(newTitle) {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [newTitle]: {
      title: newTitle,
      questions: [],
    },
  }))
}

export function addCardToDeck(title, card) {
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then((result) => {
    let obj = JSON.parse(result)
    if (title in obj) {
      let qArr = obj[title].questions
      qArr.push(card)
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: [title],
          questions: qArr
        }
      }))
    } else {
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: [title],
          questions: [{question: card.question, author: card.author}]
        }
      }))
    }
  })
}
