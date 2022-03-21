import './App.css';
import React, { Component} from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { connect } from "react-redux";
import { fetchWordToGuess } from "./redux/actions" 

class App extends Component {
  
  componentDidMount() {
    this.props.fetchWordToGuess();
  }

  render(){
    return (
      <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>
        <div className='game'>
          <Board/>
          <Keyboard/>
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
  return { fetchWordToGuess: () => dispatch(fetchWordToGuess()) };
}

function mapStateToProps(state) {
  return { wordToGuess: state.wordToGuess };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);