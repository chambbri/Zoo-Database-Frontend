import { React, useState } from 'react';

function AnimalSearch({ searchAnimal, getAnimals}) {
    const [animal_type, searchAnimalType] = useState();
    return (
        <>
            <label>Search for an animal by animal type<input type="text" value={animal_type} onChange={e => searchAnimalType(e.target.value)}/></label>
            <button onClick={() => searchAnimal(animal_type)}>Search</button>
            <button onClick={() => getAnimals()}>Clear Filter</button>
        </>
    )
}

export default AnimalSearch