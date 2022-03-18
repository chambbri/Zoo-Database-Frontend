import Axios from "axios";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const EditServicePage = ({ serviceToEdit }) => {
    const [animal, setAnimal] = useState(serviceToEdit.animal_id);
    const [date, setDate] = useState(serviceToEdit.date);
    const [time, setTime] = useState(serviceToEdit.time);
    const [caretype, setCaretype] = useState(serviceToEdit.type_of_care);
    const navigate = useNavigate();

    const editService = () => {
        if (animal === "") {
            alert("Can't leave animal blank")
        }
        if (date === "") {
            alert("Can't date date blank")
        }
        if (time === "") {
            alert("Can't leave time blank")
        }
        if (caretype === "") {
            alert("Can't leave caretype blank")
        }
        Axios.put('http://flip1.engr.oregonstate.edu:22131/animalservices' + `/${serviceToEdit.animal_services_id}`, {
            animal_id: animal,
            date: date,
            time: time,
            type_of_care: caretype,
        })
        navigate('/services')
    };


    return (
        <>
            <div className='app-container'>
                <h2>Edit animal service</h2>
                <label>Animal <input type="int" id="animal" name="animal" value = {animal} onChange = {e => setAnimal(e.target.value)}/></label>
                <label>Date <input type="date" id="date" value={date} onChange = {e => setDate(e.target.value)} /></label>
                <br />
                <label>Time <input type="time" id="time" value={time} onChange= {e => setTime(e.target.value)} /></label>
                <label>Type of Care<input type="text" id="caretype" value={caretype} onChange={e => setCaretype(e.target.value)} /></label>
                <br />
                <button onClick={editService}>Save</button>
            </div>
        </>
    );
    
}

export default EditServicePage