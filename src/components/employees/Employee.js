import React from 'react';

function Employee({ employee }) {
    return (
        <tr>
            <td>{employee.employee_id}</td>
            <td>{employee.fname}</td>
            <td>{employee.lname}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.job_title}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default Employee;