import React from 'react'
import { connect } from 'react-redux'
import { addLetterToTile} from './../redux/actions'

class Keybutton extends React.Component {
  render() {
    const selectLetter = () => {
      this.props.dispatchAddLetterToTile({
        letter: this.props.kVal
      })
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

// const mapStateToProps = (state) => {
//   return {
//     board: state.board,
//     row: state.row,
//     tile: state.tile
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Keybutton) 
export default connect(null, mapDispatchToProps)(Keybutton) 
// export default Keybutton