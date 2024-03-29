import 'bulma/css/bulma.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import ConsultaTallasContainer from './components/ConsultaTallasContainer/ConsultaTallasContainer';
import Dash from './components/Dash/Dash';
import React, { useState } from 'react'
import ConsultaVentasContainer from './components/ConsultaVentasContainer/ConsultaVentasContainer';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import { RequireToken } from './auth';

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
                element={<Login
                />}
              />
              <Route
                path='/profile'
                element={
                  <RequireToken>
                    <Profile />
                  </RequireToken>
              }
              />        
              <Route
                path='/dash'
                element={
                  <RequireToken>
                    <Dash />
                  </RequireToken>
              }
              />    
              <Route
                path='/modelo/:modelo'
                element={<ConsultaTallasContainer
                />}
              />
              <Route
                path='/ventas'
                element={
                  <RequireToken>
                    <ConsultaVentasContainer />
                  </RequireToken>
                }
              />        
          </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}

export default App;
