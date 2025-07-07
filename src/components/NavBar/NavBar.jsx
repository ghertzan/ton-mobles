import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router";

function NavBar() {
	return (
		<nav
			className="navbar navbar-expand-lg bg-primary-subtle"
			data-bs-theme="light">
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
					aria-label="Toggle navigation">
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
								aria-expanded="false">
								Categorias
							</a>
							<ul className="dropdown-menu">
								<li>
									<NavLink to={"/category/comedor"} className="dropdown-item">
										comedor
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/category/dormitorio"}
										className="dropdown-item">
										dormitorio
									</NavLink>
								</li>
								<li>
									<NavLink to={"/category/living"} className="dropdown-item">
										living
									</NavLink>
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
