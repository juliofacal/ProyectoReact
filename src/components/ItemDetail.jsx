import { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Stock from "./Stock";

function ItemDetail({ item }) {
  const { cart, addItem } = useCart();

  const existsInCart = cart.find((cartItem) => cartItem.id === item.id);

  const handleOnAdd = (quantity) => {
    addItem(item, quantity);
  };

  return (
    <>
      <h2 className="row">{item.nombre}</h2>
      <section className="row">
        <div className="col sm12 m6">
          <img
            className="responsive-img"
            src={`/img/${item.imagen}`}
            alt={item.nombre}
          />
        </div>
        <div className="col sm12 m6">
          <ul>
            <li>
              <b>Precio:</b> {item.precio}
            </li>
            <li>
              <b>Color:</b> {item.color}
            </li>
            <li>
              <b>Talla:</b> {item.talla}
            </li>
            <li>
              <b>Descripción:</b> {item.descripcion}
            </li>
          </ul>
          <Stock stock={item.stock} />
          {item.stock > 0 && (
            <ItemCount
              initial={1}
              stock={item.stock}
              item={item}
              onSetQuantity={handleOnAdd}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default ItemDetail;
