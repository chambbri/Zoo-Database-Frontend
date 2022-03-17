import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalList from '../components/animals/AnimalList';
import AnimalSearch from '../components/animals/AnimalSearch';
import Axios from 'axios';
import axios from 'axios';

function AnimalsPage( {setAnimalToEdit}) {

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

    const searchAnimal = async(animal_type) => {
        const res = await fetch(`http://flip1.engr.oregonstate.edu:22131/animals/${animal_type}`)
        const animal = await res.json();
    }

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

    const editAnimal = animal => {
        setAnimalToEdit(animal);
        navigate('/edit-animal');
    }

    const deleteAnimal = (animal_id) => {
        axios.delete(`http://flip1.engr.oregonstate.edu:22131/animals/${animal_id}`);
        setTimeout(() => getAnimals(), 500)
    }


    return(
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <form>
                <fieldset>
                    <legend>Add an animal</legend>
                    <label>Animal Type<input type="text" id="animaltype" value={type} onChange={e => setAnimalType(e.target.value)}/></label>
                    <label>Exhibit<input type ="int" name='exhibit' id="exhibit" value={exhibit} onChange={e => setExhibit(e.target.value)}></input></label>
                    <label>Origin Country<input type="text" id="origincountry" value={country} onChange={e => setOriginCountry(e.target.value)}/></label>
                    <label>Birthdate<input type="date" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} /></label>
                    <label htmlFor='gender'>Gender</label>
                    <select name="gender" id="gender" value = {gender} onChange={e => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <button onClick={addAnimal}>Add</button>
                </fieldset>
            </form>
            <br />
            <div>
                <AnimalList animals={animals} deleteAnimal={deleteAnimal} editAnimal={editAnimal} />
            </div>
            <br />
            <div>
                <AnimalSearch searchAnimal={searchAnimal}/>
            </div>
        </body>
    )
}

export default AnimalsPage;