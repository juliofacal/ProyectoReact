import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemCount from "./ItemCount";

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(producto, quantity);
  };

  function avisoStock() {
    let aviso = "";
    if (producto.stock === 1) {
      aviso = "¡Último en stock!";
    } else if (producto.stock <= 5) {
      aviso = "Últimas unidades";
    }
    return aviso;
  }

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
      .finally(setLoading(false));
  }, [id]);

  return (
    <main className="container">
      <h2 className="row">{producto.nombre}</h2>
      <section className="row">
        {loading ? (
          <>
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </>
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
                <li>{avisoStock()}</li>
              </ul>
            </div>
            <div>
              {quantityAdded > 0 ? (
                <Link to="/cart">Terminar compra</Link>
              ) : (
                <ItemCount
                  initial={1}
                  stock={producto.stock}
                  onAdd={handleOnAdd}
                />
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default ItemDetail;
