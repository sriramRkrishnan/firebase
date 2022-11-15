import React, { useState } from "react";
import { app, database } from "../../configFirebase";
import { addDoc, collection } from "firebase/firestore";

const Createcollection = () => {
  const usersCollectionRef = collection(database, "Product");

  const [userDetails, setUserDetails] = useState({
    name: "",
    category: "",
    price: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
   await addDoc(usersCollectionRef, {
      name: userDetails.name,
      category: userDetails.category,
      price: userDetails.price,
    });
   alert("document added successfully")
  };

  return (
    <div>
      <h3>Createcollection</h3>
      <input
        type="text"
        placeholder="name"
        value={userDetails.name}
        onChange={(e) => {
          return setUserDetails(
            {...userDetails,name : e.target.value}
          );
        }}
      />
      <input
        type="text"
        placeholder="category"
        value={userDetails.age}
        onChange={(e) => {
            return setUserDetails(
                {...userDetails,category : e.target.value}
              );
        }}
      />
      <input
        type="text"
        placeholder="price"
        value={userDetails.gender}
        onChange={(e) => {
            return setUserDetails(
                {...userDetails,price : e.target.value}
              );
        }}
      />

      <button
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default Createcollection;
