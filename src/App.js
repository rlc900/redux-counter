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

// console.log(props.count);
// debugger;
console.log(props.dispatch)
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <p>
      {props.count}
      </p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(App);

// connect(mapStateToProps)(App)
  // {props.count}
  // <button onClick={handleInc}>Increment</button>
  // <button onClick={handleDec}>Decrement</button>
