import React from 'react'
import { connect } from 'react-redux'

class Message extends React.Component { 
  render() {
    if (this.props.requestingAllowedGuesses || this.props.requestingWordToGuess){
      return (
        <div className='message-container'>
          <div className='message'>Loading Assets...</div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    requestingWordToGuess: state.requestingWordToGuess,
    requestingAllowedGuesses: state.requestingAllowedGuesses
  }
}

export default connect(mapStateToProps)(Message);