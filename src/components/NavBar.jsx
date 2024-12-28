import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">ECommerce</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Remeras</a></li>
        <li><a href="#">Bermudas</a></li>
        <li><a href="#">Camisas</a></li>
        <li><a href="#">Pantalones</a></li>
        <li><a href="#"><CartWidget /></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar