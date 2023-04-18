import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewEmployee()  {

    const [employee,setEmployees]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",

    })

    const {id}=useParams();

    useEffect(()=> {
loadEmployees()
    }, [])

    const loadEmployees=async ()=>{
        const result=await axios.get(`http://localhost:3030/api/v1/employees/${id}`)
        setEmployees(result.data)
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center m-4">Employee Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            <b>Employee id: {employee.id} </b>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Employee First Name: {employee.firstName}</b>
                                </li>
                                <li className='list-group-item'>
                                    <b>Employee Last Name: {employee.lastName}</b>
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: {employee.emailId}</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={'/'}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
