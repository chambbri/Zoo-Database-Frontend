import React from 'react';

function Service({ service }) {
    return (
        <tr>
            <td>{service.id}</td>
            <td>{service.animal}</td>
            <td>{service.date}</td>
            <td>{service.time}</td>
            <td>{service.typeofcare}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default Service;