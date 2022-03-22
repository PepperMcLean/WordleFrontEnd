import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Victory extends Component {
  render() {
    return (
      <div>Victory</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Victory)