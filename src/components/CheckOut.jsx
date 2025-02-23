import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function CheckOut() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !buyer.first_name ||
      !buyer.last_name ||
      !buyer.phone ||
      !buyer.address ||
      !buyer.email
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio,
      })),
      total: totalPrice(),
      fecha: serverTimestamp(),
    };

    try {
      const db = getFirestore();
      const orderRef = await addDoc(collection(db, "orders"), order);
      setOrderId(orderRef.id);

      //Update stock
      for (const item of cart) {
        const productRef = doc(db, "items", item.id);
        const productSnap = await gotDoc(productRef);

        if (productSnap.exists()) {
          if (newStock >= 0) await updateDoc(productRef, { stock: newStock });
          else console.warn(`Stock insuficiente para ${item.title}`);
        }
      }

      clearCart();
    } catch (error) {
      console.log("Error al crear la orden", error);
    }
  };

  return (
    <div className="container">
      <h2>Finalizar compra</h2>
      {!orderId ? (
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col m6">
              <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="first_name">Nombre</label>
            </div>
            <div className="input-field col m6">
              <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="last_name">Apellido</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m6">
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phone">Teléfono</label>
            </div>
            <div className="input-field col m6">
              <input
                id="address"
                name="address"
                type="text"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="address">Dirección</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col m6">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn waves-effect waves-light">
              Enviar <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      ) : (
        <>
          <p>¡Gracias por su compra!</p>
          <p>
            Su número de orden es: <strong>{orderId}</strong>
          </p>
        </>
      )}
    </div>
  );
}

export default CheckOut;
