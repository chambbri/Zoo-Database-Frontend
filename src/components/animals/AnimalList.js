import React from 'react';
import Animal from './Animal';

function AnimalList({ animals, deleteAnimal }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Animal ID</th>
                    <th>Animal Type</th>
                    <th>Exhibit ID</th>
                    <th>Origin Country</th>
                    <th>Birthdate</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {animals.map((animal, i) => <Animal animal={animal} deleteAnimal={deleteAnimal} key={i}></Animal>)}
            </tbody>
        </table>
    )
}

export default AnimalList