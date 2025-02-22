import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    let querySnapshot;

    if (id) {
      querySnapshot = query(
        collection(db, "items"),
        where("categoria", "==", id)
      );
    } else {
      querySnapshot = collection(db, "items");
    }

    getDocs(querySnapshot)
      .then((data) => {
        if (data.empty) {
          setItems([]);
        } else {
          setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="row">
        <h1 className="col s12">{id ? `Categoría: ${id}` : "Catálogo"}</h1>
      </div>
      <div className="row">
        {loading ? <Loading /> : <ItemList items={items} />}
      </div>
    </>
  );
}

export default ItemListContainer;
