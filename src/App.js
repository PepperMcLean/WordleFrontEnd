import './App.css';
import React, { Component} from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import LoadingMessage from './components/LoadingMessage';
import { connect } from "react-redux";
import { fetchWordToGuess, fetchAllowedGuesses } from "./redux/actions" 
import Navbar from './components/Navbar';
import FlashMessage from './components/FlashMessage';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchWordToGuess();
    this.props.fetchAllowedGuesses();

  }

  render(){

    return ( 
      <div className="App">
        <FlashMessage/>
        <LoadingMessage/>
        <Navbar/>
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