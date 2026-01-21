import { addDoc, collection, getDocs } from 'firebase/firestore'
import { log } from 'firebase/firestore/pipelines';
import React, { useState } from 'react'
import { db } from './firebase/config';

const App = () => {
  const [list,setList]= useState([]);
  const handleSubmit = async() => {
    try {
      const  docRef =  await addDoc(collection(db, '/users'),{
      username:'Isha',
      email:"isha@gmail.com",
      password:"1234"
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
      
    }

  }
  const handleGetUser = async() =>{
    const newList = [];
    try {
      const querySnapshot = await getDocs(collection(db,'/users'));
      querySnapshot.forEach((doc) => {
        newList.push({...doc.data(),id:doc.id});
        // console.log(doc.id);
        // console.log(doc.data());
       setList(newList);
        
        
});
    } catch (error) {
      console.log(error);
      
    }
  }
  console.log(list);
  
  return (
    <div>
      <button type="button" className='btn btn-primary ' onClick={handleSubmit}> Add Doc</button>

      <button type="button" className='btn btn-secondary ' onClick={handleGetUser}> Get All User</button>
    </div>
  )
}

export default App
