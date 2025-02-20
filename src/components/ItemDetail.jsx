import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productList from "../assets/productList.json";
import ItemCount from "./ItemCount";

import { CartContext } from "../context/CartContext";

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(producto, quantity);
  };

  useEffect(() => {
    const buscaProducto = productList.find(
      (producto) => producto.id === parseInt(id)
    );
    setProducto(buscaProducto);
  }, [id]);

  return (
    <main className="container">
      <h2 className="row">{producto.nombre}</h2>
      <section className="row">
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
        <div>
          {quantityAdded > 0 ? (
            <Link to="/cart">Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd} />
          )}
        </div>
      </section>
    </main>
  );
}

export default ItemDetail;
