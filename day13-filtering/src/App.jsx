import React, { useEffect, useState } from 'react'
import User from './components/User'
import ViewData from './components/ViewData'

const App = () => {
  const [user,setUser]=useState({});
  const [list,setList]=useState([]);
  const [data,setData]=useState([]);
  const[mount,setmount]=useState(false);
  const [editId,setEditId]=useState(null);


  useEffect(()=>{
    let newUsers=JSON.parse(localStorage.getItem("list"))||[];
    setData(newUsers);
    setList(newUsers);
    setmount(true);
  },[]);

  useEffect(()=>{
    if(mount){
      localStorage.setItem("list",JSON.stringify(list));
      
    }
  },[list]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
    }
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!editId) {
    let newList = [...list, { ...user, id: Date.now() }];
    setList(newList);
    setData(newList);
    setUser({});
  } else {
    let updateList = list.map(value => {
      if (value.id === editId) {
        return { ...value, ...user };
      }
      return value;
    });

    setList(updateList);
    setData(updateList);
    setUser({});
    setEditId(null);
  }
};

  const handleSearch=(e)=>{
   const  {value}=e.target;
    let newData=list.filter((item)=>{
      if(item.username.toLowerCase().includes(value.toLowerCase()) ){
        return item;
      }else if(item.email.toLowerCase().includes(value.toLowerCase())){
        return item;
      }
    })
    if(newData.length>0){
      setData(newData);
    }else{
      setData(list);
    }
  }
  const handleDelete=(id)=>{
    let newList=list.filter(val=>val.id!==id);
    setList(newList);
    setData(newList);
  }
  const handleEdit=(id)=>{
    let editList=list.find(val=>val.id===id);
    setUser(editList);
    setEditId(id);
  }
  return (
    <div>
      <User
       handleChange={handleChange}
        handleSubmit={handleSubmit} 
        user={user} />
      <ViewData
        user={data}
        handleSearch={handleSearch}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
      />
    </div>
  )
}

export default App
