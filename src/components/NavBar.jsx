import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ton Mobles
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
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
