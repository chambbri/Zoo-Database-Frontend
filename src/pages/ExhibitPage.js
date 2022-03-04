import { React, useState, useEffect } from 'react';
import InsertExhibit from '../components/exhibits/InsertExhibit';
import ExhibitList from '../components/exhibits/ExhibitList';


function ExhibitPage() {

    const [exhibits, setExhibits] = useState([]);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [capacity, setCapcity] = useState('');

    const getExhibits = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/exhibits');
        const exhibits = await res.json();
        setExhibits(exhibits);
    };

    useEffect(() => {
        getExhibits();
    }, []);

    const addExhibit = async() => {
        const newExhibit = {type, size, capacity};
        const response = await fetch('http://flip1.engr.oregonstate.edu:22131/exhibits', {
            method: 'POST',
            body: JSON.stringify(newExhibit),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully created the exhibit");
        } else{
            console.error(`Failed to create the exhibit. Status code ${response.status}`);
        }
    }



    return (
        <>
        <div className='app-container'>
            <h1>List of Exhibits</h1>
            <form>
            <fieldset>
                <legend>Add an exhibit</legend>
                <label>Type of Exhibit <input type="text" id="type" value={type} onChange = {e =>setType(e.target.value)}/></label>
                <label>Size<input type="int" id="size" value={size} onChange = {e =>setSize(e.target.value)}/></label>
                <br />
                <label>Animal Capacity <input type="int" id="capacity" value={capacity} onChange = {e =>setCapcity(e.target.value)} /></label>
                <br />
                <button onClick={addExhibit}>Add</button>
            </fieldset>
            </form>
            <br />
            <ExhibitList exhibits={exhibits}/>
            <br />
        </div>
        </>
    );
}

export default ExhibitPage;