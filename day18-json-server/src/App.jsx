import React, { useEffect, useState } from 'react'
import SignUp from './components/SignUp';

const App = () => {
  const [user,setUser]=useState({});
  const[list,setList]=useState([]);

  
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setUser({...user,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDDefault();
    handleAddUser();
   
    setUser({});
    
  }
  const handleAddUser = async()=>{
   try {
    await fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({...user,id:Date.now()})
    })
    console.log('User added successfully');
    handleGetUsers();
   } catch (error) {
      console.log(error.message);
   }

  }
  const handleGetUsers=async()=>{
    try {
      let  res= await fetch('http://localhost:3000/users');
      let data= await res.json();
      setList(data);
    } catch (error) {
      console.log(error.message);
    }
  }   
  return (
    <div>
      <SignUp handleChange={handleChange} handleSubmit={handleSubmit} user={user}/>
    </div>
  )
}

export default App
