import { useEffect, useState } from "react";
import Item from "./Item";
import productList from "../assets/productList.json"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(productList)
    console.log(products)
  })

  return (
    <>
    <div className="row">
      <h1>Catálogo</h1>
    </div>
    <div className="row">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
    </>
  );
}

export default ItemListContainer;
