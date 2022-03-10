import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalList from '../components/animals/AnimalList';
import AnimalSearch from '../components/animals/AnimalSearch';
import Axios from 'axios';

function AnimalsPage( exhibits ) {

    const [animals, setAnimals] = useState([]);
    const [exhibit, setExhibit] = useState('');
    const [type, setAnimalType] = useState('');
    const [country, setOriginCountry] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate()

    const getAnimals = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animals');
        const animals = await res.json();
        setAnimals(animals);
    };

    useEffect(() => {
        getAnimals();
    }, []);

    const addAnimal = () => {
        Axios.post('http://flip1.engr.oregonstate.edu:22131/animals', {
            exhibit_id: exhibit,
            animal_type: type,
            origin_country: country,
            birthdate: birthdate,
            gender: gender,
        }).then(() => {
            alert("Successfully added Animal")
        });
    };

    const deleteAnimal = async animal_id => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:22131/animals' + `/${animal_id}`, {method: 'DELETE'});
        if(response.status === 200) {
            setAnimals(animals.filter(e => e.animals !== animals))
        } else {
            console.error(`Failed to delete row`)
        }
    }


    return(
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <form>
                <fieldset>
                    <legend>Add an animal</legend>
                    <label>Animal Type<input type="text" id="animaltype" value={type} onChange={e => setAnimalType(e.target.value)}/></label>
                    <label htmlFor='exhibit'>Exhibit</label>
                    <select type="number" name='exhibit' id="exhibit" value={exhibit} onChange={e => setExhibit(e.target.value)}>
                        <option value="">Select the exhibit</option>
                    </select>
                    <label>Origin Country<input type="text" id="origincountry" value={country} onChange={e => setOriginCountry(e.target.value)}/></label>
                    <label>Birthdate<input type="date" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} /></label>
                    <label htmlFor='gender'>Gender</label>
                    <select type="text" name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="female">Male</option>
                        <option value="male">Female</option>
                    </select>
                    <button onClick={addAnimal}>Add</button>
                </fieldset>
            </form>
            <br />
            <div>
                <AnimalList animals={animals} deleteAnimal={deleteAnimal} />
            </div>
            <br />
            <div>
                <AnimalSearch />
            </div>
        </body>
    )
}

export default AnimalsPage;