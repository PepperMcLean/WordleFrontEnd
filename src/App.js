import './App.css';
import React, { Component} from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import LoadingMessage from './components/LoadingMessage';
import { connect } from "react-redux";
import { fetchWordToGuess, fetchAllowedGuesses } from "./redux/actions" 

class App extends Component {
  
  componentDidMount() {
    this.props.fetchWordToGuess();
    this.props.fetchAllowedGuesses();

  }

  render(){
    // if (this.props.history && this.props.gameWon){
    //   console.log(1)
    //   this.props.history.push('/victory');
    // } else if (this.props.history && this.props.gameOver) {
    //   this.props.history.push('/gameover')
    // }
    return ( 
      <div className="App">
        <LoadingMessage/>
        <nav>
          <h1>Wordle</h1>
        </nav>
        <div className='game'>
          <Board/>
          <Keyboard history={this.props.history}/>
        </div>
        
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <h1>Wordle</h1>
//       </nav>
//       <div className='game'>
//         <Board/>
//         <Keyboard/>
//       </div>
//     </div>
//   );
// }

//export default App;

function mapDispatchToProps(dispatch) {
  return {
    fetchWordToGuess: () => dispatch(fetchWordToGuess()),
    fetchAllowedGuesses: () => dispatch(fetchAllowedGuesses()) 
  }
}

function mapStateToProps(state) {
  return { 
    wordToGuess: state.wordToGuess, 
    allowedGuesses: state.allowedGuesses,
    gameOver: state.gameOver,
    gameWon: state.gameWon
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);