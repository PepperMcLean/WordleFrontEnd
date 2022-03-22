import React from 'react'
import { connect } from 'react-redux'
import { addLetterToTile} from './../redux/actions'
import { withRouter } from 'react-router-dom'

class Keybutton extends React.Component {


  render() {
    const selectLetter = () => {
      this.props.dispatchAddLetterToTile({
        letter: this.props.kVal
      }).then(() => { 
        if (this.props.history && this.props.gameWon){
        console.log(1)
        this.props.history.push('/victory');
      } else if (this.props.history && this.props.gameOver) {
        this.props.history.push('/gameover')
      }})
    }
    return (
      <div className="button" id={this.props.resize && "big"} onClick={selectLetter} >{this.props.kVal}</div>
    )
  }
}

// function Keybutton({ kVal, resize }) {
//   const selectLetter = () => {
//     console.log(kVal)
//     this.dispatchAddLetterToTile({
//       letter: kVal
//     })
//   }

//   return (
//     <div className="button" id={resize && "big"} onClick={selectLetter} >{kVal}</div>
//   )
// }

function mapDispatchToProps(dispatch){
  return {
    dispatchAddLetterToTile: letter => dispatch(addLetterToTile(letter))
  }
}

const mapStateToProps = (state) => {
  return {
    gameOver: state.gameOver,
    gameWon: state.gameWon
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(Keybutton) 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Keybutton))
// export default Keybutton