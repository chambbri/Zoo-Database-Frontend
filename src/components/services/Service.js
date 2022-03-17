import React from 'react';

function Service({ service, deleteService, editService }) {
    return (
        <tr>
            <td>{service.animal_services_id}</td>
            <td>{service.animal_id}</td>
            <td>{service.date}</td>
            <td>{service.time}</td>
            <td>{service.type_of_care}</td>
            <td><button type="button" onClick={() => editService(service)}>Edit</button><button onClick={() => deleteService(service.animal_services_id)}>Delete</button></td>
        </tr>
    );
}

export default Service;