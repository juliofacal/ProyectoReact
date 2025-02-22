import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="card medium col s12 m4">
      <div className="card-image">
        <img src={`/img/${item.imagen}`} alt={item.nombre} />
        <span className="card-title">{item.nombre}</span>
      </div>
      <div className="card-content">
        <p>{item.descripcion}</p>
        <p>
          <b>Precio:</b> ${item.precio}
        </p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={handleViewDetails}>
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default Item;
