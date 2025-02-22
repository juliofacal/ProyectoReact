import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existItem = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
    });

    if (existItem >= 0) {
      //si exite le item actualizo cantidad
    } else {
      return [...prevCart, { ...item, quantity }];
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, clear, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}