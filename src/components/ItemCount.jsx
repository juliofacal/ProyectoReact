import { useState } from "react";
import { useCart } from "../context/CartContext";

function ItemCount({ initial, stock, item }) {
  const { addItem, removeItem } = useCart();
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemoval = () => {
    removeItem(item.id);
  };

  return (
    <div className="item-count">
      <button
        className="btn"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        className="btn"
        onClick={handleIncrement}
        disabled={quantity >= stock}
      >
        +
      </button>
      <button
        className="btn"
        onClick={() => addItem(item, quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
      <button
        className="btn"
        onClick={() => handleRemoval(item.id)}
        disabled={!stock}
      >
        Eliminar del carrito
      </button>
    </div>
  );
}

export default ItemCount;
