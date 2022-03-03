import React from 'react';

function Employee({ employee }) {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.fname}</td>
            <td>{employee.lname}</td>
            <td>{employee.pnumber}</td>
            <td>{employee.email}</td>
            <td>{employee.actions}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default Employee;