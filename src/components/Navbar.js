import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetState } from '../redux/actions'

export class Navbar extends Component {

  handleOnClick = () => {
    this.props.resetState();
    // this.props.history.push('/')
  }

  render() {
    return (
      <nav>
        <h1 onClick={this.handleOnClick}>Wordle</h1>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => dispatch(resetState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))