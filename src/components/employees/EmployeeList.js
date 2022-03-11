import React from 'react';
import Employee from './Employee';

function EmployeeList({ employees, deleteEmployee }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Job Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, i) => <Employee deleteEmployee={deleteEmployee} employee={employee} key={i}></Employee>)}
            </tbody>
        </table>
    )
}

export default EmployeeList