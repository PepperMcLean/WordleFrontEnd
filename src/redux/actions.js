import { ADD_LETTER_TO_TILE, LOADING_WORD_TO_GUESS, ADD_WORD_TO_GUESS, LOADING_ALLOWED_GUESSES, ADD_ALLOWED_GUESSES, REINITIALIZE } from "./actionTypes";

//export const addLetterToTile = letter => ({type: ADD_LETTER_TO_TILE, payload: letter})
//export const fetchWordToGuess = () => ({type: FETCH_WORD_TO_GUESS, payload: fetch("http://localhost:3001/word_answers").then((response) => response.json())})

export const resetState = () => (dispatch) => {
  dispatch ({type: REINITIALIZE})
}

export const addLetterToTile = letter => (dispatch, getState) => {
  dispatch ({
    type: ADD_LETTER_TO_TILE, 
    payload: letter
  });
  return Promise.resolve(getState());
}

export function fetchWordToGuess() {
  return (dispatch) => {
    dispatch({ type: LOADING_WORD_TO_GUESS });
    fetch("http://localhost:3001/random")
      .then((response) => response.json())
      .then((wordToGuess) => dispatch({ type: ADD_WORD_TO_GUESS, wordToGuess }));
 
  };
}

export function fetchAllowedGuesses() {
  return (dispatch) => {
    dispatch({ type: LOADING_ALLOWED_GUESSES });
    fetch("http://localhost:3001/word_answers")
      .then((response) => response.json())
      .then((allowedGuesses) => dispatch({ type: ADD_ALLOWED_GUESSES, allowedGuesses }));
 
  };
}

export function postTimesPlayed(data) {
  fetch(`http://localhost:3001/word_answers/${data.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
}




// export function postTimesPlayed(data) {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/word_answers/${data.id}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then((response) => {
//       if (response.ok) {
//         response.json().then()
//       } else {
//         response.json().then(error => console.error(error))
//       }
//     })
//   }
// }

