import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import axios from "axios";

const Admin = () => {
 
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const [sizes, setSizes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [loading, setLoading] = useState(false);

 const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };
  const toggleGender = (gender) => {
    setGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((s) => s !== gender)
        : [...prev, gender]
    );
  };

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "thrift_upload"); 

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dlvqhoe7e/image/upload",
      formData
    );
    return response.data.secure_url; 
  };

  const handleAdd = async () => {
  if (!name || !desc || !price || !frontImage || !backImage || sizes.length === 0 || genders.length === 0) {
    alert("Please fill all fields.");
    return;
  }

  try {
    setLoading(true);

    const frontUrl = await uploadImage(frontImage);
    const backUrl = await uploadImage(backImage);

    const productData = {
      name,
      genders,
      description: desc,
      price: Number(price),
      sold:0,
      sizes,
      images: {
        front: frontUrl,
        back: backUrl,
      },
      createdAt: new Date(),
    };

    
    for (const gender of genders) {
      const genderPath = gender.toLowerCase(); 
      await addDoc(collection(db, "products", genderPath, "items"), productData);

    }

    alert("Product added successfully!");

    
    setName("");
    setDesc("");
    setPrice("");
    setSizes([]);
    setGenders([]);
    setFrontImage(null);
    setBackImage(null);

  } catch (err) {
    console.error("Error adding product:", err);
    alert("Error adding product");
  } finally {
    setLoading(false);
  }
};

  return (
   <div className="logincontainer">
      <div className="loginform">
        <h3>Add New Product</h3>
        <input className="searchinput" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
        <input className="searchinput" placeholder="Description..." value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input className="searchinput" type="number" placeholder="Price..." value={price} onChange={(e) => setPrice(e.target.value)} />
        
        <label>Front Image</label>
        <input type="file" className="fileUpload" onChange={(e) => setFrontImage(e.target.files[0])} />
        
        <label>Back Image</label>
        <input type="file" className="fileUpload" onChange={(e) => setBackImage(e.target.files[0])} />
    <br/>
        <label>Available Sizes</label>
        <div>
          {["XXL", "XL", "L", "M", "S"].map((size) => (
            <span key={size}>
              <input type="checkbox" className="check" checked={sizes.includes(size)} onChange={() => toggleSize(size)} />
              <label>{size}</label>
            </span>
          ))}
        </div>
        <br></br>
        <label>Available Genders</label>
        <div>
          {["Male", "Female"].map((gender) => (
            <span key={gender}>
              <input type="checkbox" className="check" checked={genders.includes(gender)} onChange={() => toggleGender(gender)} />
              <label>{gender}</label>
            </span>
          ))}
        </div>

        <button className="button" onClick={handleAdd} disabled={loading}>Add
          <span className="text">Add??</span>
        </button>
      </div>
    </div>
  );
};

export default Admin;

