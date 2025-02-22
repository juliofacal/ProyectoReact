import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories">
              <Route index element={<Categories />} />
              <Route path="/categories/:categoryId" element={<Category />} />
            </Route>
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
