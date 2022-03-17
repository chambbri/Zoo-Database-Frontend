import React from 'react';
import Moment from 'moment';

function Service({ service, deleteService, editService }) {
    service.date = Moment(service.date).format('YYYY-MM-DD')
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