import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper row">
        <div className="col s12">
          <Link to={"/"} className="brand-logo">
            ECommerce
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/1"}>Remeras</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/2"}>Bermudas</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/3"}>Camisas</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/4"}>Pantalones</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/5"}>Vestidos</NavLink>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
