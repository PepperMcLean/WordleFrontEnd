import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'


class Board extends React.Component {

  render() {
    return (
      <div className="board">
        {this.props.board.map((element, index) => {
          return (
            <div className='row' key={index}> 
              {element.map((value, index1) => {
                return <Tile tVal={value} key={index1} currentRow={index} currentIndex={index1}/>
            })}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    row: state.row,
    tile: state.tile
  }
}

export default connect(mapStateToProps)(Board);