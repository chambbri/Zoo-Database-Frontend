import React from 'react';
import Moment from 'moment';

function Animal({ animal, deleteAnimal, editAnimal }) {
    animal.birthdate = Moment(animal.birthdate).format('YYYY-MM-DD')
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