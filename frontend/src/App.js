import React from 'react';
import LoginPage from "../src/Pages/LoginPage";
import Registeration from './Pages/RegistrationPage';
import NavBar from '../src/Components/NavBar';
import Home from "../src/Pages/Home";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
       <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={LoginPage}/>
      <Route path='/register' exact component={Registeration}/>
     
       </Switch>
      
      </Router>
    </div>
  );
}

export default App;
