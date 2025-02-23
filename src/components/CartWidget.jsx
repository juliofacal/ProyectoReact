import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const cartContext = useCart();
  const { totalItems } = cartContext;
  return (
    <>
      {totalItems() > 0 && (
      <Link to={"/cart"}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i> {totalItems()}
      </Link>
      )}
    </>
  );
}

export default CartWidget;
