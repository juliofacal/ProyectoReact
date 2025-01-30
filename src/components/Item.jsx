import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="card medium col s12 m4">
      <div className="card-image">
        <img src="img/remera-blanca.jpg" />
        <span className="card-title">{product.nombre}</span>
      </div>
      <div className="card-content">
        <p>
          {product.descripcion}
        </p>
      </div>
      <div className="card-action">
        <Link to={`/item/${product.id}`} role="button">Ver detalles</Link>
      </div>
    </div>
  );
}

export default Item;
