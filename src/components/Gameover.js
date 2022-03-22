import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTimesPlayed } from '../redux/actions'

export class Gameover extends Component {
  componentDidMount() {
    let thatWord = {word: this.props.wordToGuess.toLowerCase(), id: this.props.wordToGuessId, played: (this.props.timesPlayed)}
    if (this.props.gameOver) {
      postTimesPlayed(thatWord)
      console.log('it works')
    }
  }
  render() {
    console.log(this.props.gameOver)
    if (this.props.gameOver) {
      return (
        <div>
          <div>Game Over!</div>
          <div>The word was {this.props.wordToGuess.toLowerCase()}.</div>
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
    gameOver: state.gameOver,
    wordToGuess: state.wordToGuess,
    wordToGuessId: state.wordToGuessId,
    timesPlayed: state.timesPlayed
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Gameover)