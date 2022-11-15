import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { database } from '../../configFirebase';

const Deletedata = () => {

    const deleteData = async (e)=>{
        e.preventDefault()
        await deleteDoc(doc(database, "Product", "wrfDhJqYY6BVe2JlVdzQ"));
    }

  return (
    <div>Deletedata

        <button onClick={(e)=>{return deleteData(e)}}>delete</button>
    </div>
  )
}

export default Deletedata