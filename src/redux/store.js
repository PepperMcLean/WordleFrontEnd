const initialBoard = [
  ["x", "o", "x", "o", "x"],
  ["", "s", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "w", ""],
  ["", "", "", "", ""],
];

const currentLocation = [0, 0]

const initialState = {board: initialBoard, location: currentLocation}

function reducer(state = initialState, action){
  return state;
}

export default reducer;