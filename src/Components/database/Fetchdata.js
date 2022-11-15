import React from "react";
import { app, database } from "../../configFirebase";
import { collection, doc, getDocs } from "firebase/firestore";

const Fetchdata = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const querySnapshot = await getDocs(collection(database, "Product"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().name);
    });
 
  };

  return (
    <div>
      Fetchdata
      <button
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        get data
      </button>
    </div>
  );
};

export default Fetchdata;
