import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

function ItemDetailContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const querySnapshot = await getDoc(doc(db, "items", id));
      return querySnapshot.data();
    };
    fetchProducto()
      .then((results) => {
        setItem(results);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main className="container">
      {loading ? <Loading /> : <ItemDetail item={item} />}
    </main>
  );
}

export default ItemDetailContainer;
