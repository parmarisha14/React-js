import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Page";
import ViewData from "./components/About/Page";
import Header from './components/Header';

const App = () => {

  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
    
      const updated = list.map((item) =>
        item.id === editId ? { ...item, ...employee } : item
      );
      setList(updated);
      setEditId(null);
    } else {
     
      const newEmp = { id: Date.now(), ...employee };
      setList([...list, newEmp]);
    }

    setEmployee({});
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setEmployee(data);
    setEditId(id);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          index
          element={
            <Home
              handleChange={handleChange}
              employee={employee}
              handleSubmit={handleSubmit}
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
};

export default App;
