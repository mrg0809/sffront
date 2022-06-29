import 'bulma/css/bulma.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import ConsultaTallasContainer from './components/ConsultaTallasContainer/ConsultaTallasContainer';
import Dash from './components/Dash/Dash';
import React, { useState } from 'react'

const AuthApi = React.createContext();

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <br></br><br></br><br></br>
            <Routes>
              <Route
                path='/'
                element={<Dash
                />}
              />    
              <Route
                path='/modelo/:modelo'
                element={<ConsultaTallasContainer
                />}
              />         
          </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}

export default App;
