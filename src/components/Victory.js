import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Victory extends Component {
  render() {
    console.log(this.props.gameWon)
    if (this.props.gameWon) {
      return (
        
        <div>Victory</div>
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
  gameWon: state.gameWon
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Victory)