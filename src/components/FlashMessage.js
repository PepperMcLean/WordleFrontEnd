import React from 'react'
import { connect } from 'react-redux'
import { setCurrenctlyGuessingToFalse } from '../redux/actions'

class FlashMessage extends React.Component { 
  render() {
    if (this.props.currentlyGuessing){
      setTimeout(() => {this.props.setCurrenctlyGuessingToFalse()}, 1000)
      return (
        <div className='message-container'>
          <div className='message'>That is not a valid word.</div>
        </div>
      )
      
    } else {
      return null
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrenctlyGuessingToFalse: () => dispatch(setCurrenctlyGuessingToFalse())
  }
}

const mapStateToProps = (state) => {
  return {
    currentlyGuessing: state.currentlyGuessing
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);