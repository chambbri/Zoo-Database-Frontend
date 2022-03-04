import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InsertEmployee from '../components/employees/InsertEmployee';
import EmployeeList from '../components/employees/EmployeeList';

function EmployeesPage() {

    const [employees, setEmployees] = useState([]);
    const [createEmployees, setCreateExhibit] = useState([]);

    const getEmployees = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/employees');
        const employees = await res.json();
        setEmployees(employees)
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return(
        <body>
            <h1>West Coast Best Coast Zoo Employees</h1>
            <div>
                <InsertEmployee />
            </div>
            <br />
            <div>
                <EmployeeList employees={employees} />
            </div>
            <br />
        </body>
    )
}

export default EmployeesPage;