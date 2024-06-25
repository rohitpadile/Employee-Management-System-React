import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className='text-center mt-4'>Employees List</h2>
            <div className='row' style={{ width: 'fit-content' }}>
                <Link to='/add-employee' className='btn btn-primary'>Add Employee</Link>
            </div>
            <div className='row mt-2'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    {/* Example action button */}
                                    {/* <button className='btn btn-info'>Edit</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
