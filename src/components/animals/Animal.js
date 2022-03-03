import React from 'react';

function Animal({ animal }) {
    return (
        <tr>
            <td>{animal.id}</td>
            <td>{animal.type}</td>
            <td>{animal.exhibit}</td>
            <td>{animal.country}</td>
            <td>{animal.birthdate}</td>
            <td>{animal.gender}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default Animal;