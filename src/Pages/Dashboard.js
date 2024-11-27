import React from 'react'
import WebsiteBuilder from '../Components/WebsiteBuilder';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded lg:w-25">
        <h1 className="justify-center text-center">Welcome to Vcommerce</h1>
        <h3>Create Your Website with us </h3>
        <form>

        <div className="mb-3">
            <label htmlFor="password">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter Your Business Name" autoComplete="off" name="name" className="form-control rounded-0" >
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="Category">
              <strong>Category</strong>
            </label>
            <input type="text" placeholder="Enter Your Business Category" autoComplete="off" name="category" className="form-control rounded-0" >
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="Location">
              <strong>Location</strong>
            </label>
            <input type="text" placeholder="Enter Your Business Location" autoComplete="off" name="location" className="form-control rounded-0" >
            </input>
          </div>

          
          <button onClick={() => navigate("/WebsiteBuilder")} type='submit' className='btn btn-success w-100 rounded-2'>Create Page Now</button> 
        </form>
        

      </div>
    </div>

    </>
  );
};

export default Dashboard;


