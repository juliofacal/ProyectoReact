import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h1>Carrito</h1>
        <p>No hay items en el carrito.</p>
        <Link to="/">Productos</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <p>Total: ${total}</p>
      <button onClick={() => clearCart()} className="btn">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="btn"></Link>
    </>
  );
}

export default Cart;
