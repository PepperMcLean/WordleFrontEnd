import { ADD_LETTER_TO_TILE, LOADING_WORD_TO_GUESS, ADD_WORD_TO_GUESS } from "./actionTypes";

export const addLetterToTile = letter => ({type: ADD_LETTER_TO_TILE, payload: letter})
//export const fetchWordToGuess = () => ({type: FETCH_WORD_TO_GUESS, payload: fetch("http://localhost:3001/word_answers").then((response) => response.json())})


export function fetchWordToGuess() {
  return (dispatch) => {
    dispatch({ type: LOADING_WORD_TO_GUESS });
    fetch("http://localhost:3001/word_answers")
      .then((response) => response.json())
      .then((wordToGuess) => dispatch({ type: ADD_WORD_TO_GUESS, wordToGuess }));
 
  };
}

