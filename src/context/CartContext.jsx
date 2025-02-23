import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    let foundItem = false;
    const updatedCart = [];

    cart.forEach((ele) => {
      if (ele.id === item.id) {
        ele.cantidad += cantidad;
        foundItem = true;
      }
      updatedCart.push(ele);
    });

    if (!foundItem) {
      item = { ...item, cantidad };
      updatedCart.push(item);
    }

    setCart(updatedCart);
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
