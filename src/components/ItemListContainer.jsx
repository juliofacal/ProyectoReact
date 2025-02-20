import { useEffect, useState } from "react";
import Item from "./Item";
import productList from "../assets/productList.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productList);
  });

  return (
    <>
      <div className="row">
        <h1 className="col s12">Catálogo</h1>
      </div>
      <div className="row">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
