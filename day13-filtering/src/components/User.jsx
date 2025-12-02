import React from "react";

const User = ({ handleChange, handleSubmit, user }) => {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 ">
            
          <form onSubmit={handleSubmit}>
            <h2 className="text-center mt-3">User Form</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                
                id="username"
                name="username"
                onChange={handleChange}
                value={user.username || ''}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={user.email || ''}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Email address
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                value={user.password || ''}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default User;
