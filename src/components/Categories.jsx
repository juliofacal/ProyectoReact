import { Link } from "react-router-dom";
const categoriesList = [
  { id: 1, name: "Remeras", descripcion: "aaaa" },
  { id: 2, name: "Bermudas", descripcion: "bbbb" },
  { id: 3, name: "Camisas", descripcion: "cccc" },
  { id: 4, name: "Pantalones", descripcion: "dddd" },
  { id: 5, name: "Vestidos", descripcion: "eeee" },
];

function Categories() {
  return (
    <main className="container">
      <h1>Categorías</h1>
      <ul>
        {categoriesList.map((cat) => (
          <li key={cat.id}>
            <Link to={`/categories/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Categories;
