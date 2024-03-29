import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../Input/Input";
import Logout from "../Logout/Logout";

function NavBar() {
  const [isActive, setisActive] = useState(false);
    return (

<nav className="navbar is-white has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to='/' className="navbar-item">
      <img src="https://cdn.shopify.com/s/files/1/0284/3046/7144/files/Logo_SF_180x.png?v=1589620799" alt="carritoimg"></img>
    </Link>

    <a role="button" className={`navbar-burger burger${isActive ? "is-active" : ""}`}
     aria-label="menu"
     aria-expanded="false"
     data-target="navbarBasicExample"
     onClick={() => setisActive(!isActive)}
     >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample is-center" className={`navbar-menu${isActive ? "is-active" : ""}`}>
  <div className="navbar-start">
          <Link to="/dash" className="navbar-item">Dashboard</Link>
          <Link to="/ventas" className="navbar-item">Ventas</Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Mejores Articulos</a>
            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">Total</Link>
              <Link to="/" className="navbar-item">Rio 3</Link>
              <Link to="/" className="navbar-item">Macroplaza</Link>
              <Link to="/" className="navbar-item">Macroplaza 2</Link>
              <Link to="/" className="navbar-item">Palmas</Link>
              <Link to="/" className="navbar-item">Senderos EVF</Link>
              <Link to="/" className="navbar-item">Senderos SF</Link>
              <Link to="/" className="navbar-item">Ensenada 1</Link>
              <Link to="/" className="navbar-item">Ensenada 2</Link>
              <Link to="/" className="navbar-item">Ensenada 3</Link>
              <Link to="/" className="navbar-item">Mexicali 1</Link>
              <Link to="/" className="navbar-item">Mexicali 2</Link>
              <Link to="/" className="navbar-item">Las Torres</Link>
              <Link to="/" className="navbar-item">Gran Patio</Link>
            </div>
            
          </div>
          
        </div>
        
        <div className="navbar-end">
            <div className="navbar-item">
                <Input />
            </div>
      
        </div>

  </div>
</nav>
)
}

export default NavBar;