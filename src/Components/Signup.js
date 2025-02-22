import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


function Signup() {
  const [name, setName] =useState()
  const [email, setEmail] =useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/registration', {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log (err))
  }

 return(
    <>
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded lg:w-25">
      <h1 className="justify-center text-center">Welcome to Vcommerce</h1>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter Your Name" autoComplete="off" name="name" className="form-control rounded-0" onChange={(e) => setName(e.target.value)}>
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Business Name</strong>
            </label>
            <input type="text" placeholder="Enter Your Business Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Location</strong>
            </label>
            <input type="text" placeholder="Enter Your Business Location" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="text" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-2'>Register</button>
        </form>
        <p>Already Have an Account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>

      </div>
    </div>
    </>

  );
};

export default Signup;
