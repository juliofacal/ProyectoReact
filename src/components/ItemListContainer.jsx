import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = {
    1: "remeras",
    2: "bermudas",
    3: "camisas",
    4: "pantalones",
    5: "vestidos",
  };

  useEffect(() => {
    const db = getFirestore();
    let querySnapshot;

    if (id) {
      querySnapshot = query(
        collection(db, "items"),
        where("categoria", "==", parseInt(id))
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
        <h1 className="col s12">{id ? `Categoría: ${categories[id]}` : "Catálogo"}</h1>
      </div>
      <div className="row">
        {loading ? <Loading /> : <ItemList items={items} />}
      </div>
    </>
  );
}

export default ItemListContainer;
