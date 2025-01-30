import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productList from "../assets/productList.json";

function Category() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [catId, setCatId] = useState(categoryId);

  useEffect(() => {
    const filterProducts = productList.filter(
      (prod) => prod.categoria === parseInt(catId)
    );
    setProducts(filterProducts);
    console.log(products)
  }, []);

  return (
    <main className="container">
      <h1>Category</h1>
      <ul className="container">
        {products.map((product) => (
          <li key={product.id} className="card">
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
          </li>
        ))}
      </ul>
      <Link to={"/categories"}>Volver a Categorías</Link>
    </main>
  );
}

export default Category;
