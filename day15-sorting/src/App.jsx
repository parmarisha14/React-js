import React, { useEffect, useState } from 'react'
import User from './components/User';
import ViewUser from './components/ViewUser';

const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(list.length / itemsPerPage);

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('user')) || [];
    setList(oldList);
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Add User
  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: Date.now(),
      ...user,
    };

    let newList = [...list, newUser];
    setList(newList);
    localStorage.setItem("user", JSON.stringify(newList));
    setUser({});
  };

  // Sorting Function
  const handleSort = () => {
    const sortedList = [...list].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.username.localeCompare(b.username);
      } else {
        return b.username.localeCompare(a.username);
      }
    });
    setList(sortedList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <User
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
      />

      <ViewUser
        list={list}
        currentItems={currentItems}
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default App;
