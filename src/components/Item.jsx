import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="card medium col s12 m4">
      <div className="card-image">
        <img src={`/img/${producto.imagen}`} alt={producto.nombre} />
        <span className="card-title">{producto.nombre}</span>
      </div>
      <div className="card-content">
        <p>{producto.descripcion}</p>
        <p>
          <b>Precio:</b> ${producto.precio}
        </p>
      </div>
      <div className="card-action">
        <Link to={`/item/${producto.id}`} role="button">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;
