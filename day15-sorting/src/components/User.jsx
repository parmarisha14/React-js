import React from 'react';

const User = ({ user, handleChange, handleSubmit, handleSort }) => {
  return (
    <div className="container mt-4">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          value={user.username || ""}
          onChange={handleChange}
          className="form-control mt-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email || ""}
          onChange={handleChange}
          className="form-control mt-2"
          required
        />

        <button className="btn btn-primary mt-3">Add</button>
        <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={handleSort}>
          Sort
        </button>
      </form>
    </div>
  );
};

export default User;
