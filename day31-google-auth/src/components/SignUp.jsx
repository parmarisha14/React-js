import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'   // ✅ adjust path if needed
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [user, setUser] = useState({})
 const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/login"))
      .catch(err => alert(err.message))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Sign Up</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={user.email || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={user.password || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
               <p className="text-center mt-3 mb-0">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
