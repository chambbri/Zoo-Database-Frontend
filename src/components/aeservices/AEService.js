import React from 'react';

function AEService({ aeservice, deleteAEService }) {
    return (
        <tr>
            <td>{aeservice.animal_services_id}</td>
            <td>{aeservice.employee_id}</td>
            <td><button type="button">Edit</button><button onClick={() => deleteAEService(aeservice.animal_services_id)}>Delete</button></td>
        </tr>
    );
}

export default AEService;