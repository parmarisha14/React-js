import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import AddBook from "./page/AddBook";
import ViewBook from "./page/ViewBook";
import Header from "./components/Header";
import Home from "./page/Home";

const App = () => {
  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const [borrow,setBorrow] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("books")) || [];
    let oldBorrow = JSON.parse(localStorage.getItem("borrow")) || [];
    setList(oldList);
    setBorrow(oldBorrow);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = list;

    if (book.id) {
      newList = list.map((val) => {
        if (book.id === val.id) {
          return book;
        }

        return val;
      });
      navigate("/view-book");
    } else {
      newList = [...list, { ...book, id: Date.now() }];
    }

    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));
    setBook({});
  };
  const handleDelete = (id) => {
    let newList = list.filter((val) => val.id !== id);
    setList(newList);
    localStorage.setItem("books", JSON.stringify(newList));
  };
  const handleEdit = (id) => {
    let data = list.find((val) => val.id === id);
    setBook(data);
    navigate("/add-book");
  };
  const handleBorrowedBook = (id)=>{
    let data = list.find(value=> value.id == id);
    if(data.count > 0){
      data.count--;
    }
    let newList = list.map((value)=>{
      if(value.id == id)return data;
      return value;
    })
    let newBorrowed = [...borrow,data];
    setBorrow(newBorrowed);
    setList(newList);
     localStorage.setItem("borrow", JSON.stringify(newBorrowed));
    localStorage.setItem("books", JSON.stringify(newList));
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home list={list} handleBorrowedBook={handleBorrowedBook} />} />
        <Route
          path="/add-book"
          element={
            <AddBook
              book={book}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/view-book"
          element={
            <ViewBook
              list={list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
