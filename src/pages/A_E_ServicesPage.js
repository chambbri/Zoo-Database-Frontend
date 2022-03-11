import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsertAEService from '../components/aeservices/InsertAEService';
import AEServiceList from '../components/aeservices/AEServiceList';
import Axios from "axios";

function AEServicePage() {
    const [aeservices, setAEServices] = useState([]);
    const [service, setService] = useState('');
    const [employee, setEmployee] = useState('');
    const [createAEService, setCreateAEService] = useState([]);

    const getAEServices = async () => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices');
        const aeservices = await res.json();
        setAEServices(aeservices)
    };

    useEffect(() => {
        getAEServices();
    }, []);

    const addAEServices = () => {
        Axios.post('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices', {
            animal_services_id: service,
            employee_id: employee,
        }).then(() => {
            alert("Successfully added Animal Employee Services")
        });
    };

    const deleteAEService = async animal_service_id => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:22131/animalemployeeservices' + `/${animal_service_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            setAEServices(aeservices.filter(e => e.aeservices !== aeservices))
        } else {
            console.error(`Failed to delete row`)
        }
    }


    return (
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <form>
                <fieldset>
                    <legend>Add an entry</legend>
                    <label>animal_services_id<input type="int" id="animalservid" value={service} onChange={e => setService(e.target.value)} /></label>
                    <label>employee_id<input type="int" id="employeeid" value={employee} onChange={e => setEmployee(e.target.value)} /></label>
                    <button onClick={addAEServices}>Add</button>
                </fieldset>
            </form>
            <br />
            <div>
               <AEServiceList deleteAEService={deleteAEService} aeservices={aeservices} />
            </div>
        </body>
    )
}

export default AEServicePage;