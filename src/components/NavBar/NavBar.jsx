import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../Input/Input";

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
          <Link to="/" className="navbar-item">Dashboard</Link>
          <Link to="/" className="navbar-item">Ventas</Link>
          <Link to="/" className="navbar-item">Mejores Articulos</Link>
          
          
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