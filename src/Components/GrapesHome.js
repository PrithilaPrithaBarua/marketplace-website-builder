import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { API_HOST } from '../api_utils';
import { Link } from 'react-router-dom';

const GrapesHome = () => {
    const [pages, setPages] = useState([]);
    const [isValid, setIsValid] = useState(true);
    const [name, setName] =useState('');
    const [error, setError] =useState('');

    const handleSubmit = () => {
        if(!name) {
            setIsValid(false);
            return;
        }
    };

    useEffect(() => {
        async function getAllPages() {
            try{
                const response = await axios.get(`${API_HOST}/`);
                setPages(response.data);
            }
            catch(error){
                console.log('error: >>', error);
                setError(error.message);
            }
        }
        getAllPages();
    }, []);



  return (
    <>
    <div className='container'>
        <div className='row'> 
            <div className='col-12 mt-5'>
                <form id='create-page'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='addPageModalLabel'>Create Page</h5>
                    </div>
                    <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary btn-sm' data-bs-dismiss='modal' onClick='clearform()'>Clear</button>
                        <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
            <div className='col-12 my-2'>
                {error && (
                    <div role='alert' className='alert alert-ptimary'> {error}</div>
                )}
                <table className='table table-bothered table-hover'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Slug</td>
                            <td>Action</td>                       </tr>
                    </thead>
                    <tbody>
                        {pages? pages.map(page=>(
                            <tr key={page._id}>
                            <td>{page._id}</td>
                            <td>{page.name}</td>
                            <td>{page.slug}</td>
                            <td>
                                <Link to={`/editor/${page._id}`}>Edit</Link>
                            </td>
                        </tr>)):"No Page"}

                        
                        
                        
                        
                    </tbody>
                </table>

            </div>
        </div>

    </div>
    </>
  )
}

export default GrapesHome