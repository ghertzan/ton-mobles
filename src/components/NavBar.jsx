import { useState, useEffect, useRef } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router";
import { getCategories } from "../firebase/database";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const getCat = useRef(getCategories());
  
  useEffect(() => {
    setCategories(getCat.current);
  }, [categories]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          e-comm
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
      
                  <li>
                    <NavLink to={'/category/comedor'} className={'dropdown-item'} >Comedor</NavLink>
                  </li>
                  
                  <li>
                    <NavLink to={'/category/dormitorio'} className={'dropdown-item'} >Dormitorio</NavLink>
                  </li>    

                  
                  <li>
                    <NavLink to={'/category/living'} className={'dropdown-item'} >Living</NavLink>
                  </li>  
              
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
