import { ADD_LETTER_TO_TILE } from "./actionTypes";

const initialBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const initialState = {board: initialBoard, row: 0, tile: 0, correctWord: "EARLY"};

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
          newState.row += 1
          newState.tile = 0
          console.log("it works")
        }
        return newState
      } else if (state.tile < 5) {
        newState.board[newState.row][newState.tile] = action.payload.letter;
        newState.tile += 1
        return newState;
      } else {
        return newState;
      }

    default:
      return state;
  }
}

export default reducer;