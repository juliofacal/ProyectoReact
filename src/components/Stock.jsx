import React from "react";

function Stock({stock}) {
  function avisoStock() {
    let aviso = "";
    if (stock === 1) {
      aviso = "¡Último en stock!";
    } else if (stock <= 5) {
      aviso = "Últimas unidades";
    }
    return aviso;
  }

  return (
    <div>
      <p>{avisoStock()}</p>
    </div>
  );
}

export default Stock;
