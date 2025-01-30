import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
import ItemDetail from "./components/ItemDetail";

function Titulo({ titulo, clase }) {
  return <h1 className={clase}>{titulo ? titulo : "Título"}</h1>;
}

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories">
            <Route index element={<Categories />} />
            <Route path="/categories/:categoryId" element={<Category />} />
          </Route>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
