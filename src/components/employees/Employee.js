import React from 'react';

function Employee({ employee, deleteEmployee, editEmployee }) {
    return (
        <tr>
            <td>{employee.employee_id}</td>
            <td>{employee.fname}</td>
            <td>{employee.lname}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.job_title}</td>
            <td><button type="button" onClick={() => editEmployee(employee)}>Edit</button><button onClick={() => deleteEmployee(employee.employee_id)}>Delete</button></td>
        </tr>
    );
}

export default Employee;