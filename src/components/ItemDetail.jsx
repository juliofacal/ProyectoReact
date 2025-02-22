import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Loading from "./Loading";
import Stock from "./Stock";

function ItemDetail() {
  const { id } = useParams();
  const { cart, addItem } = useCart();

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(producto, quantity);
  };

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const snap = await getDoc(doc(db, "items", id));
      return snap.data();
    };
    fetchProducto()
      .then((results) => {
        setProducto(results);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main className="container">
      <h2 className="row">{producto.nombre}</h2>
      <section className="row">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="col sm12 m6">
              <img
                className="responsive-img"
                src={`/img/${producto.imagen}`}
                alt={producto.nombre}
              />
            </div>
            <div className="col sm12 m6">
              <ul>
                <li>
                  <b>Precio:</b> {producto.precio}
                </li>
                <li>
                  <b>Color:</b> {producto.color}
                </li>
                <li>
                  <b>Talla:</b> {producto.talla}
                </li>
                <li>
                  <b>Descripción:</b> {producto.descripcion}
                </li>
              </ul>
            </div>
            <Stock stock={producto.stock} />
            {producto.stock > 0 ? (
              <ItemCount
                initial={1}
                stock={producto.stock}
                item={handleOnAdd}
              />
            ) : (
              <></>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default ItemDetail;
