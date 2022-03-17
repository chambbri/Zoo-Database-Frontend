import Axios from "axios";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const EditExhibitPage = ({ exhibitToEdit }) => {
    const [type, setType] = useState(exhibitToEdit.type);
    const [size, setSize] = useState(exhibitToEdit.size);
    const [animal_capacity, setCapacity] = useState(exhibitToEdit.animal_capacity);
    const navigate = useNavigate();

    const editExhibit = () => {
        Axios.put('http://flip1.engr.oregonstate.edu:22131/exhibits' + `/${exhibitToEdit.exhibit_id}`, {
            type: type,
            size: size,
            animal_capacity: animal_capacity,
        })
        navigate('/exhibits')
    };


    return (
        <>
            <div className='app-container'>
                <h2>Edit exhibit</h2>
                <label>Type of Exhibit <input type="text" id="type" value={type} onChange = {e =>setType(e.target.value)}/></label>
                <label>Size<input type="int" id="size" value={size} onChange = {e =>setSize(e.target.value)}/></label>
                <br />
                <label>Animal Capacity <input type="int" id="capacity" value={animal_capacity} onChange = {e =>setCapacity(e.target.value)} /></label>
                <br />
                <button onClick={editExhibit}>Save</button>
            </div>
        </>
    );
    
}

export default EditExhibitPage