import React from 'react';
import { connect } from 'react-redux'
import './App.css';

function App(props) {

const handleInc = (evt) => {
  props.dispatch({
    type: 'INCREMENT'
  })
}

const handleDec = (evt) => {
  props.dispatch({
    type: 'DECREMENT'
  })
}

console.log(props.countArr.length);
// debugger;

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <p>
        {props.countArr.length}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countArr: state.countArr
  }
}


export default connect(mapStateToProps)(App);
