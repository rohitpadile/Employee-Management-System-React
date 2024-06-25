import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data);
        });
    }, []);

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => {
            setEmployees(employees.filter(employee => employee.id !== id)); //FILTERING THE HOME PAGE UI LIST
        }).catch(error => {
            console.error('Error deleting employee:', error);
        });
    };

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
                                    <button onClick={() => editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                    <button style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
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
