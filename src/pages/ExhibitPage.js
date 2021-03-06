import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InsertExhibit from '../components/exhibits/InsertExhibit';
import ExhibitList from '../components/exhibits/ExhibitList';
import Axios from "axios";


function ExhibitPage( { setExhibitToEdit }) {

    const [exhibits, setExhibits] = useState([]);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [capacity, setCapacity] = useState('');
    const navigate = useNavigate();

    const getExhibits = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/exhibits');
        const exhibits = await res.json();
        setExhibits(exhibits);
    };

    useEffect(() => {
        getExhibits();
    }, []);

    const addExhibit = () => {
        if (type === "") {
            alert("Can't leave type blank")
            return
        }
        if (size === "") {
            alert("Can't leave size blank")
            return
        }
        if (capacity === "") {
            alert("Can't leave capacity blank")
            return
        }
        Axios.post('http://flip1.engr.oregonstate.edu:22131/exhibits', {
            type: type,
            size: size,
            animal_capacity: capacity,
        }).then(() => {
            alert("Successfully added Exhibit")
        });
    };

    const editExhibit = exhibit => {
        setExhibitToEdit(exhibit);
        navigate('/edit-exhibit');
    }

    const deleteExhibit = (exhibit_id) => {
        Axios.delete(`http://flip1.engr.oregonstate.edu:22131/exhibits/${exhibit_id}`);
        setTimeout(() => getExhibits(), 500)
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
                <label>Animal Capacity <input type="int" id="capacity" value={capacity} onChange = {e =>setCapacity(e.target.value)} /></label>
                <br />
                <button onClick={addExhibit}>Add</button>
            </fieldset>
            </form>
            <br />
            <ExhibitList exhibits={exhibits} deleteExhibit={deleteExhibit} editExhibit={editExhibit}/>
            <br />
        </div>
        </>
    );
}

export default ExhibitPage;