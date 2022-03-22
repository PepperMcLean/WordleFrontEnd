import { ADD_LETTER_TO_TILE, LOADING_WORD_TO_GUESS, ADD_WORD_TO_GUESS, LOADING_ALLOWED_GUESSES, ADD_ALLOWED_GUESSES } from "./actionTypes";

//export const addLetterToTile = letter => ({type: ADD_LETTER_TO_TILE, payload: letter})
//export const fetchWordToGuess = () => ({type: FETCH_WORD_TO_GUESS, payload: fetch("http://localhost:3001/word_answers").then((response) => response.json())})


export const addLetterToTile = letter => (dispatch, getState) => {
  dispatch ({
    type: ADD_LETTER_TO_TILE, 
    payload: letter
  });
  return Promise.resolve(getState());
}

// export const updateAlert = (alert, message) => {
//   return {
//     type: 'UPDATE_ALERT',
//     alert,
//     message
//   }
// }

// export const updateAlert = (alert, message) => (dispatch, getState) => {  
//   dispatch ({
//     type: 'UPDATE_ALERT',
//     alert,
//     message
//   });
//   return Promise.resolve(getState());
//   // or just Promise.resolve();



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