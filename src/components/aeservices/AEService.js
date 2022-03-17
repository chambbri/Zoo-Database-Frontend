import React from 'react';

function AEService({ aeservice, deleteAEService, editAEService }) {
    return (
        <tr>
            <td>{aeservice.animal_services_id}</td>
            <td>{aeservice.employee_id}</td>
            <td><button type="button" onClick={() => editAEService(aeservice)}>Edit</button><button onClick={() => deleteAEService(aeservice.animal_services_id, aeservice.employee_id)}>Delete</button></td>
        </tr>
    );
}

export default AEService;