import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut";

function Cart() {
  const { cart, totalPrice, removeItem, clearCart } = useCart();
  {console.log(cart)}
  return (
    <main className="container">
      <h1>Carrito</h1>
      <div>
        {cart.lenght === 0 ? (
          <>
            <p>No hay items en el carrito.</p>
            <Link to="/" className="btn">
              Volver al catálogo
            </Link>
          </>
        ) : (
          <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.nombre} - Cantidad: {item.cantidad} - Precio: $
                {item.precio}
              </p>
              <button className="btn" onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <h2>Total: ${totalPrice()}</h2>
          <button className="btn" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn">Finalizar compra</Link>
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
