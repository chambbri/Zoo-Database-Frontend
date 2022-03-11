import React, {useState} from "react";
import {useHistory} from "react-router-dom"

export const EditExhibitPage = () => {
    const [exhibits, setExhibits] = useState([]);
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [capacity, setCapacity] = useState('');

    const history  = useHistory();

    const editExhibit = () => {
        Axios.put('http://flip1.engr.oregonstate.edu:22131/exhibits/id', {
            type: type,
            size: size,
            animal_capacity: capacity,
        }).then(() => {
            alert("Successfully added Exhibit")
        });
    };

    const editExhibit = exhibit => 


    return (
        <>
            <div className='app-container'>
                <form>
                    <fieldset>
                        <legend>Edit an exhibit</legend>
                        <label>Type of Exhibit <input type="text" id="type" value={type} onChange={e => setType(e.target.value)} /></label>
                        <label>Size<input type="int" id="size" value={size} onChange={e => setSize(e.target.value)} /></label>
                        <br />
                        <label>Animal Capacity <input type="int" id="capacity" value={capacity} onChange={e => setCapacity(e.target.value)} /></label>
                        <br />
                        <button onClick={editExhibit}>Save</button>
                    </fieldset>
                </form>
        </div>
        </>
    );
    
}

export default EditExhibitPage