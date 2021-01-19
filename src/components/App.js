import React, { useState } from 'react'
import '../css/App.css';
import User from './User.js';
import Playing from './Playing';



function App(props) {



  return (
    <div className='container text-center bg-dark text-white' id='containerApp'>
      <div className='header'>
        <h1>Tic Tac Toe in React</h1>
      </div>
      <div  className='d-none d-print-block'>
        <User show={props.visible} />
      </div>
      <div className='playing'>
        <Playing />
      </div>
    </div>

  );
}

export default App;
