import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="container">
      <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo">
          ECommerce
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/categories'}>Categorías</NavLink>
          </li>
          {/* <li><Link to={'/remeras'}>Remeras</Link></li>
          <li><Link to={'/bermudas'}>Bermudas</Link></li>
          <li><Link to={'/camisas'}>Camisas</Link></li>
          <li><Link to={'/pantalones'}>Pantalones</Link></li> */}
          <li>
            <a href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
