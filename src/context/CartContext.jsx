import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (cantidad > item.stock) {
      alert(
        `No puedes agregar más de ${item.stock} unidades de este producto.`
      );
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, cantidad } : cartItem
        );
      } else {
        return [...prevCart, { ...item, cantidad }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const totalItems = () => cart.reduce((acc, item) => acc + item.cantidad, 0);

  const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, totalItems, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe estar dentro de un CartProvider");
  }
  return context;
};

export default CartProvider;
