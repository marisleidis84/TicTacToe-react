import React, { useState } from 'react'
import '../css/App.css';
import User  from './User.js';
import Playing from './Playing';



function App(props) {

  const [showUser, setShowUser] = useState(true);


  return (
    <div className='container text-center bg-dark text-white' id='containerApp'>
      <div className='header'>
        <h1>Tic Tac Toe in React</h1>
      </div>
      {
        showUser ? <div><User changeVisivility={setShowUser} /></div> : <div className='playing'><Playing /></div>
      }
    </div>

  );
}

export default App;
