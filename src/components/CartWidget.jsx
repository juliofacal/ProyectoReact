import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <>
      <Link to="/cart" style={{ display: totalItems > 0 ? "block" : "none" }}>
        <i className="large material-icons material-symbols-outlined">
          shopping_cart {totalItems}
        </i>
      </Link>
    </>
  );
}

export default CartWidget;
