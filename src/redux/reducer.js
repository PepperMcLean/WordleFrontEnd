const initialBoard = [
  ["x", "o", "x", "o", "x"],
  ["", "s", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "w", ""],
  ["", "", "", "", ""],
];
const currentRow = 0;
const currentTile = 0;

const initialState = {board: initialBoard, row: currentRow, tile: currentTile}

function reducer(state = initialState, action){
  switch (action.type) {
    // case ADD_LETTER_TO_TILE:
      
    //   return 

    default:
      return state;
  }
}

export default reducer;