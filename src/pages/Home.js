
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [employees, setEmployees]=useState([]);

    const {id}=useParams()
    useEffect(() => {
        loadEmployees();

    },[]);

    const loadEmployees=async() => {
        const result = await axios.get("http://localhost:3030/api/v1/employees");
        setEmployees(result.data);
        //console.log(result.data);
    }

    const deleteEmployee=async (id)=>{
      await axios.delete(`http://localhost:3030/api/v1/employees/${id}`)
      loadEmployees()
    }

    
  return (
    <div className='container'>
        <div className='py-4'>
        <table className='table border shadow'>
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee,id)=>(
            <tr>
      <th scope="row" key={id}>{employee.id}</th>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewemployee/${employee.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/editemployee/${employee.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteEmployee(employee.id)}
        >Delete</button>
      </td>
    </tr>
        ))
    }
  </tbody>
</table>
        </div>
    </div>
  )
}
