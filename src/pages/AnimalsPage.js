import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsertAnimal from '../components/animals/InsertAnimal';
import AnimalList from '../components/animals/AnimalList';
import AnimalSearch from '../components/animals/AnimalSearch';

function AnimalsPage(){

    const [animals, setAnimals] = useState([]);
    const [createAnimals, setCreateAnimals] = useState([]);

    const getAnimals = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animals');
        const animals = await res.join()
        setAnimals(animals)
    };

    useEffect(() => {
        getAnimals();
    }, []);


    return(
        <body>
            <h1>West Coast Best Coast Zoo Animalss</h1>
            <div>
                <InsertAnimal />
            </div>
            <br />
            <div>
                <AnimalList animals={animals} />
            </div>
            <br />
            <div>
                <AnimalSearch />
            </div>
        </body>
    )
}

export default AnimalsPage;