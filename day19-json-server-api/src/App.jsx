import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

 
  const getAllUser = async () => {
    try {
      let result = await axios.get("http://localhost:3000/users");
      if (Array.isArray(result.data)) {
        setList(result.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  
  useEffect(() => {
    getAllUser();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

 
  const createUser = async (data) => {
    try {
      await axios.post("http://localhost:3000/users", data);
      console.log("User created");
      getAllUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user);
    setUser({});
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password || ""}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((value, index) => (
                  <tr key={value.id}>
                    <td>{index + 1}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>
                      <button className="btn btn-danger me-2">
                        Delete
                      </button>
                      <button className="btn btn-warning">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
