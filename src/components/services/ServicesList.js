import React from 'react';
import Service from './Service';

function ServiceList({ services, deleteService }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Animal Service ID</th>
                    <th>Animal ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Type of Care</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {services.map((service, i) => <Service deleteService={deleteService} service={service} key={i}></Service>)}
            </tbody>
        </table>
    )
}

export default ServiceList