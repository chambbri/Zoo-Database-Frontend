import Axios from "axios";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const EditAnimalPage = ({ animalToEdit }) => {

    const [exhibit, setExhibit] = useState(animalToEdit.exhibit);
    const [type, setAnimalType] = useState(animalToEdit.type);
    const [country, setOriginCountry] = useState(animalToEdit.country);
    const [birthdate, setBirthdate] = useState(animalToEdit.birthdate);
    const [gender, setGender] = useState(animalToEdit.gender);
    const navigate = useNavigate()

    const editAnimal = () => {
        Axios.put('http://flip1.engr.oregonstate.edu:22131/animals' + `/${animalToEdit}`, {
            exhibit_id: exhibit,
            animal_type: type,
            origin_country: country,
            birthdate: birthdate,
            gender: gender,
        })
        navigate('/animals')
    };


    return (
        <>
            <div className="app-container">
                <legend>Edit animal</legend>
                <label>Animal Type<input type="text" id="animaltype" value={type} onChange={e => setAnimalType(e.target.value)} /></label>
                <label>Exhibit<input type="int" name='exhibit' id="exhibit" value={exhibit} onChange={e => setExhibit(e.target.value)}></input></label>
                <label>Origin Country<input type="text" id="origincountry" value={country} onChange={e => setOriginCountry(e.target.value)} /></label>
                <label>Birthdate<input type="date" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} /></label>
                <label htmlFor='gender'>Gender</label>
                <select name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={editAnimal}>Save</button>

            </div>
        </>
    );
    
};

export default EditAnimalPage;