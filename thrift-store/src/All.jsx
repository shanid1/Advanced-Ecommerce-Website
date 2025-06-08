import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import ProductCard from "./ProductCard";

const All = ({ mainTitle, name, showView }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Urban Thrive"
    const fetchProducts = async () => {
      let allItems = [];
      const genderPaths = ["male", "female"];

      if (mainTitle === "Top Selling") {
        for (const gender of genderPaths) {
          const topSellingQuery = query(
            collection(db, "products", gender, "items"),
            orderBy("sold", "desc"),
            limit(5) 
          );

          const snapshot = await getDocs(topSellingQuery);
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            allItems.push({ id: docSnap.id, gender, ...data });
          });
        }

        
        allItems.sort((a, b) => (b.sold || 0) - (a.sold || 0));
        setProducts(allItems.slice(0, 10)); 
      } else {
        for (const gender of genderPaths) {
          const itemsRef = collection(db, "products", gender, "items");
          const snapshot = await getDocs(itemsRef);
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            if (
              data.name?.toLowerCase().includes(mainTitle.toLowerCase()) ||
              data.description?.toLowerCase().includes(mainTitle.toLowerCase()||
              data.genders(0)?.toLowerCase().includes(mainTitle.toLowerCase()))
            ) {
              allItems.push({ id: docSnap.id, gender, ...data });
            }
          });
        }
        setProducts(allItems);
      }
    };

    fetchProducts();
  }, [mainTitle]);

  const handleDelete = async (productId, gender) => {
    try {
      await deleteDoc(doc(db, "products", gender, "items", productId));
      setProducts((prev) => prev.filter((p) => p.id !== productId));
      alert("Deleted successfully");
    } catch (err) {
      console.error("Error deleting:", err);
      alert("Error deleting product");
    }
  };

  return (
    <div className="mainDiv">
      <h1>{mainTitle === "Top selling" ? mainTitle : `${mainTitle} Products`}</h1>
      <hr />
      {products.length === 0 ? (
        <h3>Loading....</h3>
      ) : (
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              name={name}
              onDelete={() => handleDelete(product.id, product.gender)}
              showProduct={() => showView(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default All;
