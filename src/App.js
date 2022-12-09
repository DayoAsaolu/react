import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Clock } from './Components/Clock/Clock'
import Toggle from './Extra/Toggle';
import LoginControl from './Components/Login/LoginControl2';
import RenderPhoto from './Components/photoApi/RenderPhoto'
import LogInForm from './Components/Login/LogInForm';
import EssayForm from './Forms/EssayForm';
import FlavorForm from './Forms/FlavorForm'
import MemoCallback from './Components/ReactStateMgt/UseMemoCallback';
import UseEffect from './Components/ReactStateMgt/UseEffect'


function App() {


  return (
    <div className="App">
      <header className="App-header">
        
        <MemoCallback/>
        {/* <UseEffect/> */}
      </header>
    </div>
  );
}

export default App;

