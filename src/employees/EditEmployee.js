import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditEmployee() {

    let navigate=useNavigate();

    const {id}=useParams()

        const [employee, setEmployees]=useState({
            id:"",
            firstName:"",
            lastName:"",
            emailId:"",
        });
        

        const{firstName, lastName, emailId}=employee

        const onInputChange=(e)=>{

            setEmployees({ ...employee,[e.target.name]:e.target.value});

        };

        useEffect(()=>{
            loadEmployees()
        },[])

        const onSubmit=async (e)=>{
            e.preventDefault();
            await axios.put(`http://localhost:3030/api/v1/employees/${id}`, employee);
            navigate("/");

        }

        const loadEmployees= async () =>{
            const result=await axios.get(`http://localhost:3030/api/v1/employees/${id}`)
            setEmployees(result.data)
        }
        return (
            <div className="container">
                <div className='="row'>
                    <div className="col-md offset-md-3 border rouunded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Edit Employee</h2>
                        <form onSubmit={(e)=>onSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="Employee Id" className='form-label'>
                               Employee Id
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter employee id'
                            name='id'
                            value={id}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>    
                        <div className="mb-3">
                            <label htmlFor="First Name" className='form-label'>
                               First Name
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter employee first name'
                            name='firstName'
                            value={firstName}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Last Name" className='form-label'>
                               Last Name
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter employee last name'
                            name='lastName'
                            value={lastName}
                            onChange={(e)=>onInputChange(e)}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className='form-label'>
                                Email
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your email'
                            name='emailId'
                            value={emailId}
                            onChange={(e)=>onInputChange(e)}
                            />
                            <button type='submit' className='btn btn-outline-primary'>
                                Submit
                            </button>
                            <Link className='btn btn-outline-danger mx-2' to="/">
                                Cancel
                            </Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    
}
