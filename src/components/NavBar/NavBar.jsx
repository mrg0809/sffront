import { Link } from "react-router-dom";
import Input from "../Input/Input";

function NavBar() {
    return (

<nav className="navbar is-white has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to='/' className="navbar-item">
      <img src="https://cdn.shopify.com/s/files/1/0284/3046/7144/files/Logo_SF_180x.png?v=1589620799" alt="carritoimg"></img>
    </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample is-center" className="navbar-menu">
  <div className="navbar-start">
          <Link to="/" className="navbar-item">Dashboard</Link>
          <Link to="/" className="navbar-item">Ventas</Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Mejores Articulos</a>
            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">Total</Link>
              <Link to="/" className="navbar-item">Rio 3</Link>
              <Link to="/" className="navbar-item">Galerias</Link>
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