import React from 'react';

function Animal({ animal }) {
    return (
        <tr>
            <td>{animal.animal_id}</td>
            <td>{animal.animal_type}</td>
            <td>{animal.exhibit_id}</td>
            <td>{animal.origin_country}</td>
            <td>{animal.birthdate}</td>
            <td>{animal.gender}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default Animal;