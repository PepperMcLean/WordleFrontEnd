import { ADD_ALLOWED_GUESSES, ADD_LETTER_TO_TILE, ADD_WORD_TO_GUESS, LOADING_ALLOWED_GUESSES, LOADING_WORD_TO_GUESS } from "./actionTypes";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];


const initialState = {board: initialBoard, row: 0, tile: 0, wordToGuess: "FIVER", allowedGuesses: [], requestingWordToGuess: false, requestingAllowedGuesses: false};

function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_LETTER_TO_TILE:
      const newBoard = [...state.board];
      let newState = Object.assign({}, state);
      newState.board = newBoard;
      if (action.payload.letter === 'delete') {
        console.log(newState.tile)
        newState.board[newState.row][newState.tile-1] = ""
        if (newState.tile > 0) newState.tile -= 1;
        return newState;
      } else if (action.payload.letter === 'enter') {
        if (newState.tile === 5 && newState.row < 5) {
          console.log(newState.allowedGuesses)
          newState.row += 1
          newState.tile = 0
        }
        return newState
      } else if (state.tile < 5) {
        newState.board[newState.row][newState.tile] = action.payload.letter;
        newState.tile += 1
        return newState;
      } else {
        return newState;
      }
      
    case LOADING_WORD_TO_GUESS:
      return {
        ...state,
        wordToGuess: [...state.wordToGuess],
        requestingWordToGuess: true,
      };

    case ADD_WORD_TO_GUESS:
      console.log(action.wordToGuess.word)
      return {
        ...state,
        wordToGuess: action.wordToGuess.word.toUpperCase(),
        requestingWordToGuess: false,
      };

    case LOADING_ALLOWED_GUESSES:
      return {
        ...state,
        allowedGuesses: [...state.allowedGuesses],
        requestingAllowedGuesses: true,
      };       
    
    case ADD_ALLOWED_GUESSES:
      console.log(action.allowedGuesses)
      return {
        ...state,
        allowedGuesses: action.allowedGuesses,
        requestingAllowedGuesses: false,
      };
    default:
      return state;
  }
}

export default reducer;