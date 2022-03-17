import Axios from "axios";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export const EditAEServicePage = ({ a_e_serviceToEdit }) => {
    const [service, setService] = useState(a_e_serviceToEdit.animal_services_id);
    const [employee, setEmployee] = useState(a_e_serviceToEdit.employee_id);
    const navigate = useNavigate();

    const editAEService = () => {
        Axios.put('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices' + `/${a_e_serviceToEdit.animal_services_id}` + `/${a_e_serviceToEdit.employee_id}`, {
            animal_services_id: service,
            employee_id: employee,
        })
        navigate('/animal-employee-services')
    };


    return (
        <>
            <div className='app-container'>
                <h2>Edit animal employee service</h2>
                <label>animal_services_id<input type="int" id="animalservid" value={service} onChange={e => setService(e.target.value)} /></label>
                <label>employee_id<input type="int" id="employeeid" value={employee} onChange={e => setEmployee(e.target.value)} /></label>
                <button onClick={editAEService}>Save</button>
            </div>
        </>
    );
    
}

export default EditAEServicePage