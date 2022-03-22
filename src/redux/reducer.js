import { ADD_ALLOWED_GUESSES, ADD_LETTER_TO_TILE, ADD_WORD_TO_GUESS, LOADING_ALLOWED_GUESSES, LOADING_WORD_TO_GUESS, REINITIALIZE, SET_CURRENTLY_GUESSING_TO_FALSE } from "./actionTypes";


const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];


const initialState = {
  board: initialBoard, 
  row: 0, 
  tile: 0, 
  wordToGuess: "FIVER", 
  timesPlayed: 0,
  wordToGuessId: 0,
  allowedGuesses: [], 
  requestingWordToGuess: false, 
  requestingAllowedGuesses: false, 
  gameOver: false, 
  gameWon: false,
  currentlyGuessing: false
};


function reducer(state = initialState, action){
  switch (action.type) {

    case ADD_LETTER_TO_TILE:

      const newBoard = [...state.board];
      let newState = Object.assign({}, state);
      newState.board = newBoard;
      newState.currentlyGuessing = false
      if (action.payload.letter === 'delete') {
        newState.board[newState.row][newState.tile-1] = ""
        if (newState.tile > 0) newState.tile -= 1;
        return newState;
      } else if (action.payload.letter === 'enter') {
        if (newState.tile === 5 && newState.row < 6) {
          let guess = newState.board[newState.row].join('').toLowerCase()

          if (newState.allowedGuesses.includes(guess)) {// check to see if the guess is in the allowed guesses array
            if (guess.toUpperCase() === newState.wordToGuess){
              newState.timesPlayed += 1;
              newState.gameWon = true;
              // window.location = '/victory'
            } else if (newState.tile === 5 && newState.row === 5) {
              newState.timesPlayed += 1;
              newState.gameOver = true;
              // window.location = '/gameover'
            } else {
              newState.row += 1
              newState.tile = 0
            }
          } else {
            newState.currentlyGuessing = true
          } 
          return newState
        } else {
          return newState
        }
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
        requestingWordToGuess: true,
      };

    case ADD_WORD_TO_GUESS:
      console.log(action.wordToGuess.word)
      console.log(action.wordToGuess.id)
      return {
        ...state,
        wordToGuessId: action.wordToGuess.id,
        timesPlayed: action.wordToGuess.played,
        wordToGuess: action.wordToGuess.word.toUpperCase(),
        requestingWordToGuess: false,
      };

    case LOADING_ALLOWED_GUESSES:
      return {
        ...state,
        requestingAllowedGuesses: true,
      };       
    
    case ADD_ALLOWED_GUESSES:
      console.log(action.allowedGuesses)
      return {
        ...state,
        allowedGuesses: action.allowedGuesses,
        requestingAllowedGuesses: false,
      };
    
    case REINITIALIZE:
      window.location.assign('/')
      return state;

    case SET_CURRENTLY_GUESSING_TO_FALSE:
      return {
        ...state,
        currentlyGuessing :false
      }

    default:
      return state;
      
  }
}

export default reducer;