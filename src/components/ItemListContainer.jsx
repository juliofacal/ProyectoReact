import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import Item from "./Item";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    let q;
    if (categoryId) {
      q = query(collection(db, "items"), where("categoria", "==", categoryId));
    } else {
      q = collection(db, "items");
    }

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.empty) {
          setProductos([]);
        } else {
          setProductos(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      <div className="row">
        <h1 className="col s12">Catálogo</h1>
      </div>
      <div className="row">
        {loading ? (
          <>
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            {productos.map((producto) => (
              <Item key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
