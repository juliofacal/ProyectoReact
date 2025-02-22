import { useCart } from "../context/CartContext";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clear } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <>
      <h1>Carrito</h1>
      <div>
        {cart.lenght === 0 ? (
          <p>No hay items en el carrito.</p>
        ) : (
          cart.map((p) => (
            <div key={item.id} style={styles.itemDetailContainer}>
              <p>
                {item.nombre} - Cantidad: {item.cantidad} - Precio: $
                {item.precio}
              </p>
              <button className="btn" onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </div>
          ))
        )}
        {cart.lenght > 0 && (
          <>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={clear} className="btn">
              Limpiar carrito
            </button>
            <CheckOut />
          </>
        )}
      </div>
      <Link to="/checkout" className="btn"></Link>
      <Link to="/">Productos</Link>
    </>
  );
}

export default Cart;
