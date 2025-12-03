import React from "react";

const User = ({ user, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} method="post" className="p-4 shadow rounded bg-white">

            <h3 className="text-center mb-4">Add User</h3>

            <div className="mb-3">
              <label className="form-label" htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={user.username || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={user.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
