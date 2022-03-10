import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InsertEmployee from '../components/employees/InsertEmployee';
import EmployeeList from '../components/employees/EmployeeList';
import Axios from 'axios';

function EmployeesPage() {

    const [employees, setEmployees] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const navigate = useNavigate();


    const addEmployee = () => {
        Axios.post('http://flip1.engr.oregonstate.edu:22131/employees', {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            job_title: job,
        }).then(() => {
            alert("Successfully added Employees")
        });
    };

    const onDelete = async fname => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:22131/employees' + `/${fname}`, {method: 'DELETE'});
        if(response.status === 200) {
            setEmployees(employees.filter(e => e.employees !== employees))
        } else {
            console.error(`Failed to delete row`)
        }
    }

    const getEmployees = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/employees');
        const employees = await res.json();
        setEmployees(employees)
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return(
        <>
        <div className='app-container'>
            <h1>West Coast Best Coast Zoo Employees</h1>
            <form>
                <fieldset>
                    <legend>Add an employee</legend>
                    <label>First Name <input type="text" id="fname" value={fname} onChange={e =>setFname(e.target.value)} /></label>
                    <label>Last Name <input type="text" id="lname" value={lname} onChange={e =>setLname(e.target.value)} /></label>
                    <label>Phone Number <input type="tel" id="phone" value={phone} onChange={e =>setPhone(e.target.value)} /></label>
                    <label>Email<input type="email" id="email" value={email} onChange={e =>setEmail(e.target.value)} /></label>
                    <label>Job Title<input type="text" id="job" value={job} onChange={e =>setJob(e.target.value)} /></label>
                    <button onClick={addEmployee}>Add</button>
                </fieldset>
            </form>
            <br />
            <div>
                <EmployeeList onDelete={onDelete} employees={employees} />
            </div>
            <br />
        </div>
        </>
    )
}

export default EmployeesPage;