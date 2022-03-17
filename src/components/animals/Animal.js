import React from 'react';

function Animal({ animal, deleteAnimal, editAnimal }) {
    return (
        <tr>
            <td>{animal.animal_id}</td>
            <td>{animal.animal_type}</td>
            <td>{animal.exhibit_id}</td>
            <td>{animal.origin_country}</td>
            <td>{animal.birthdate}</td>
            <td>{animal.gender}</td>
            <td><button onClick={() => editAnimal(animal)}>Edit</button><button onClick={() => deleteAnimal(animal.animal_id)} type="button">Delete</button></td>
        </tr>
    );
}

export default Animal;