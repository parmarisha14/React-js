import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'   
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({})
 const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/add-book"))
      .catch(err => alert(err.message))
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Login</h3>

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
                Login
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
