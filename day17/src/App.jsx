import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Page";
import ViewData from "./components/About/Page";
import Header from "./components/Header";
import Login from "./components/Login/Page"
const App = () => {
  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [mount, setMount] = useState(false);
  const navigetor=useNavigate();
  const [isAuth,setIsAuth]=useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("list")) || [];
    setList(data);
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list, mount]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      let newList=list;
      newList=newList.map((value)=>{
        if(value.id==editId){
          return{...value,...employee};

        }
        return value;
      })
      setList(newList);
      setEditId(null);
      navigetor('/viewdata');
    } else {
      setList([...list, { id: Date.now(), ...employee }]);
    }

    setEmployee({});
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setEmployee(data);
    setEditId(id);
    navigetor('/');
  };
  if(isAuth){
    
   
  return (
    <>
      <Header />

      <Routes>
        <Route
          index
          element={
            <Home
              employee={employee}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editId={editId}
            />
          }
        />

        <Route
          path="/viewdata"
          element={
            <ViewData
              list={list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
}
  else{
  return(
    <>
    <Login setIsAuth={setIsAuth}/>
    </>
  );
}
};

export default App;
