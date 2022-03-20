import React from 'react'
import { connect } from 'react-redux'

class Tile extends React.Component {
  
  render() {
    const correct = this.props.correctWord[this.props.currentIndex] === this.props.tVal;
    const present = !correct && this.props.tVal !== "" && this.props.correctWord.includes(this.props.tVal)
    console.log(this.props.currentRow)
    const tileState = this.props.row > this.props.currentRow && (correct ? "correct" : present ? "present" : "incorrect")
    
    return (
      <div className='tile' id={tileState}>{this.props.tVal}</div>
    )
  }
}
// function Tile({tVal}) {

//   console.log(Tile.props.correctWord)
//   return (
    
//     <div className='tile'>{tVal}</div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    board: state.board,
    row: state.row,
    tile: state.tile,
    correctWord: state.correctWord
  }
}

export default connect(mapStateToProps)(Tile);