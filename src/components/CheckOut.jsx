import { useCart } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CheckOut() {
  const consumidor = {
    first_name: "Jul",
    last_name: "Fac",
    email: "facjul@mail.com",
  };

  const { cart } = useCart();

  const order = {
    consumidor,
    items: cart.map((item) => ({
      id: item.id,
      title: item.nombre,
      price: item.price,
    })),
    //total:
  };

  const handlePurchase = async () => {
    try {
      const db = getFirestore();
      const orders = collection(db, "orders");
      const orderRef = await addDoc(orders, order);
      alert(`Compra realizada con éxito. Orden número: ${orderRef.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <h2>Finalizar compra</h2>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="firt_name">Nombre</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="lart_name">Apellido</label>
          </div>
        </div>
        <div className="row">
          <button
            className="btn waves-effect waves-light"
            onClick={handlePurchase}
          >
            Enviar
            <i className="right material-icons material-symbols-outlined">
              send
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
