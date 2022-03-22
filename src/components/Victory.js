import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTimesPlayed, resetState } from '../redux/actions'

export class Victory extends Component {
  componentDidMount() {
    let thatWord = {word: this.props.wordToGuess.toLowerCase(), id: this.props.wordToGuessId, played: (this.props.timesPlayed)}
    if (this.props.gameWon) {
      postTimesPlayed(thatWord)
      console.log('it works')
    }
  }
  render() {
    let thatWord = {word: this.props.wordToGuess.toLowerCase(), id: this.props.wordToGuessId, played: (this.props.timesPlayed)}
    console.log(this.props.gameWon)
    if (this.props.gameWon) {
      return (
        <div>
          <div>Victory!</div>
          <div>The word {this.props.wordToGuess.toLowerCase()} has been played {this.props.timesPlayed} time(s)!</div>
        </div>
      )
    } else {
      return (
        <div>You should not be here!</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {    
  gameWon: state.gameWon,
  wordToGuess: state.wordToGuess,
  wordToGuessId: state.wordToGuessId,
  timesPlayed: state.timesPlayed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => dispatch(resetState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Victory)

