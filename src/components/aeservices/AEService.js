import React from 'react';

function AEService({ aeservice }) {
    return (
        <tr>
            <td>{aeservice.animal_services_id}</td>
            <td>{aeservice.employee_id}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default AEService;