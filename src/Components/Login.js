import React from "react";
import { useNavigate } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded lg:w-25">
        <h1 className="justify-center text-center">Welcome to Vcommerce</h1>
        <h3>Log in to your account </h3>
        <form>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" >
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input type="text" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0" >
            </input>
          </div>
          <button onClick={() => navigate("/Dashboard")} type='submit' className='btn btn-success w-100 rounded-2'>Login</button> 
        </form>
        

      </div>
    </div>

    </>
  );
};

export default Login;
