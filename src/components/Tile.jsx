import React from 'react'
import { connect } from 'react-redux'

class Tile extends React.Component {
  
  render() {
    const correct = this.props.wordToGuess[this.props.currentIndex] === this.props.tVal;
    const present = !correct && this.props.tVal !== "" && this.props.wordToGuess.includes(this.props.tVal)
    const tileState = this.props.row > this.props.currentRow && (correct ? "correct" : present ? "present" : "incorrect")
    
    return (
      <div className='tile' id={tileState}>{this.props.tVal}</div>
    )
  }
}
// function Tile({tVal}) {

//   console.log(Tile.props.wordToGuess)
//   return (
    
//     <div className='tile'>{tVal}</div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    board: state.board,
    row: state.row,
    tile: state.tile,
    wordToGuess: state.wordToGuess
  }
}

export default connect(mapStateToProps)(Tile);