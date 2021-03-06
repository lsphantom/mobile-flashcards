import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions'


const initialDecksState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


function udaciCards(state = initialDecksState, action) {
  const {decks, newDeck, id, title, newCard} = action;
  let modState = state;

  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks
      }

    case ADD_NEW_DECK:
      return {
        ...state,
        ...newDeck
      }

    case ADD_NEW_CARD:
        //Try making a copy of the state??
        //const stateCopy = {...state};
        //stateCopy[title].questions.push(newCard);
      return {
        ...state,
        [id]: {
          title,
          questions: [...state[id].questions, newCard]
        },
      }
        
    default:
      return state;
  }
}

export default udaciCards;