import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      {stock ? (
        <>
          <button className="btn" onClick={handleDecrement}>
            -
          </button>
          <p>{quantity}</p>
          <button className="btn" onClick={handleIncrement}>
            +
          </button>
          <button
            className="btn"
            onClick={() => onAdd(quantity)}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </>
      ) : (
        <>
          <p>No hay stock {stock}</p>
        </>
      )}
    </>
  );
}

export default ItemCount;
