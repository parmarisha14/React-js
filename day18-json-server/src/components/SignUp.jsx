import React from 'react'

const SignUp = ({user,handleChange,hadleSubmit}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
            <h2>Sign Up</h2>
            <form onSubmit={hadleSubmit} method='post'>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={user.email || ''}
              onChange={handleChange}
              name="email"
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
                name="password"
                value={user.password || ''}
                onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
