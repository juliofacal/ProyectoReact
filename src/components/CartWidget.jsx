import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <Link
        to="/cart"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <i className="large material-icons material-symbols-outlined">
          shopping_cart {totalQuantity}
        </i>
      </Link>
    </>
  );
}

export default CartWidget;
