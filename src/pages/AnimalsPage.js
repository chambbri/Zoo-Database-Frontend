import React from 'react';
import { Link } from 'react-router-dom';
import InsertAnimal from '../components/animals/InsertAnimal';
import AnimalList from '../components/animals/AnimalList';
import AnimalSearch from '../components/animals/AnimalSearch';

function animals(){
    return(
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <div>
                <InsertAnimal />
            </div>
            <br />
            <div>
                <AnimalList />
            </div>
            <br />
            <div>
                <AnimalSearch />
            </div>
        </body>
    )
}

export default animals;