import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InsertEmployee from '../components/employees/InsertEmployee';
import EmployeeList from '../components/employees/EmployeeList';

function employees(){
    return(
        <body>
            <h1>West Coast Best Coast Zoo Employees</h1>
            <div>
                <InsertEmployee />
            </div>
            <br />
            <div>
                <EmployeeList />
            </div>
            <br />
        </body>
    )
}

export default employees;