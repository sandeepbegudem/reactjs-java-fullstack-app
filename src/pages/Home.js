
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home() {

    const [employees, setEmployees]=useState([]);
    useEffect(() => {
        loadEmployees();

    },[]);

    const loadEmployees=async() => {
        const result = await axios.get("http://localhost:3030/api/v1/employees");
        setEmployees(result.data);
        //console.log(result.data);
    }

    
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
    </tr>
        ))
    }
  </tbody>
</table>
        </div>
    </div>
  )
}
