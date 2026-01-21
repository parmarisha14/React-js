import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";
import Header from "./components/Header";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase/config";

const App = () => {
  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  
  const createBook = async (book) => {
    try {
      await addDoc(collection(db, "books"), book);
      alert("Book Added");
    } catch (error) {
      console.log(error);
    }
  };

  
  const getAllBooks = async () => {
    try {
      let booksData = [];
      let querySnapShot = await getDocs(collection(db, "books"));
      querySnapShot.forEach((doc) => {
        booksData.push({ ...doc.data(), id: doc.id });
      });
      setList(booksData);
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) =>{
     const {name,value} = e.target;
     setBook({...book,[name]:value});

  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (book.id) {
      await updateBook(book.id, book);
    } else {
      await createBook(book);
    }

    setBook({});
    navigate("/view-book");
  };

 
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "books", id));
      alert("Book Deleted");
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };


  const updateBook = async (id, updatedBook) => {
    try {
      await updateDoc(doc(db, "books", id), updatedBook);
      alert("Book Updated");
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };


  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setBook(data);
    navigate("/");
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
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
    </>
  );
};

export default App;
