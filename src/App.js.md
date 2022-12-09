import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Clock } from './api/Clock/Clock.js'
import Toggle from './Extra/Toggle';
import LoginControl from './api/Login/LoginControl2.js';
import RenderPhoto from './api/photoApi/RenderPhoto.js'
import LogInForm from './api/Login/LogInForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm'

function formatName(firstname, lastname) {
  return `${firstname} ${lastname}` 
}
const user = {
  firstname: 'Harper',
  lastname: 'Stone'
}



function App() {
  const { firstname, lastname } = user
  const fullname = formatName( firstname, lastname ) 

  const numbers = [1.1, 2.2, 3.3, 4.4, 5.5];
  const listItems = numbers.map((numbers) => <li>{numbers}</li>);

  const photoDetails = [ ["0911", "car", "img_url"] ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginControl/>
        <LogInForm/>
        <Clock />

      </header>
    </div>
  );
}

export default App;

