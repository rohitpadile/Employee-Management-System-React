import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const changeEmailIdHandler = (event) => {
        setEmailId(event.target.value);
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        }
        console.log('employee =>', employee);
    }

    return (
        <div >
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: '50px' }}>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' value={firstName} onChange={changeFirstNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' value={lastName} onChange={changeLastNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label>Email:</label>
                                    <input placeholder='Email' name='emailId' className='form-control' value={emailId} onChange={changeEmailIdHandler}/>
                                </div>

                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                <Link to='/employees' className='btn btn-danger' style={{ marginLeft: 10 }}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;
