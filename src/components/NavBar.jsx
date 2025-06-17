import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary-subtle"
      data-bs-theme="light"
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sillas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sillones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mesas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" aria-disabled="true">
                Juegos
              </a>
            </li>
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
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <NavLink
                      to={`/category/${cat.slug}`}
                      className="dropdown-item"
                    >
                      {cat.name}
                    </NavLink>
                  </li>
                ))}
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
