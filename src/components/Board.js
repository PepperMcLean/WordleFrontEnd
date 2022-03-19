import React from 'react'
import { connect } from 'react-redux'

class Board extends React.Component {
  state = {

  }

  render() {
    console.log(this.props.board)
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    location: state.location
  }
}

export default connect(mapStateToProps)(Board);