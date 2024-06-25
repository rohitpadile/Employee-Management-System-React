import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [saved, setUpdated] = useState(false);

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmailId(employee.emailId);
        });
    }, [id]);

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const changeEmailIdHandler = (event) => {
        setEmailId(event.target.value);
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };
        console.log('employee =>', employee);
        EmployeeService.updateEmployee(id, employee).then(res => {
            console.log(`${employee.firstName} ${employee.lastName} is successfully updated`);
            setUpdated(true);
        }).catch(error => {
            console.log('Error updating employee:', error);
        });
    }

    if (saved) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Link to='/employees' className='btn btn-success'>Employee details updated successfully. Go to Employees</Link>
            </div>
        );
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: '50px' }}>
                        <h3 className='text-center'>Update Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={firstName} onChange={changeFirstNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={lastName} onChange={changeLastNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Email:</label>
                                    <input placeholder='Email' name='emailId' className='form-control' value={emailId} onChange={changeEmailIdHandler} />
                                </div>

                                <button className='btn btn-success' onClick={updateEmployee}>Update</button>
                                <Link to='/employees' className='btn btn-danger' style={{ marginLeft: 10 }}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
