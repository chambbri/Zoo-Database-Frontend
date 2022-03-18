import { React, useState, useEffect } from 'react';
import InsertServices from '../components/services/InsertServices';
import ServiceList from '../components/services/ServicesList';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function ServicesPage({ setServiceToEdit }) {

    const [services, setServices] = useState([]);
    const [animal, setAnimal] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [caretype, setCaretype] = useState();
    const navigate = useNavigate();


    const getServices = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animalservices');
        const services = await res.json()
        setServices(services)
    };

    useEffect(() => {
        getServices();
    }, []);

    const addService = () => {
        Axios.post('http://flip1.engr.oregonstate.edu:22131/animalservices', {
            animal_id: animal,
            date: date,
            time: time,
            type_of_care: caretype,
        }).then(() => {
            alert("Successfully added Service")
        });
    };

    const editService = animal_service => {
        setServiceToEdit(animal_service);
        navigate('/edit-service');
    }

    const deleteService = (animal_service_id) => {
        Axios.delete(`http://flip1.engr.oregonstate.edu:22131/animalservices/${animal_service_id}`);
        setTimeout(() => getServices(), 500)
    }

    return (
        <>
            <div className='app-container'>
                <h1>List of Services</h1>
                <form>
                <fieldset>
                    <legend>Add A Service</legend>
                    <label>Animal <input type="int" id="animal" name="animal" value = {animal} onChange = {e => setAnimal(e.target.value)}/></label>
                    <label>Date <input type="date" id="date" value={date} onChange = {e => setDate(e.target.value)} /></label>
                    <br />
                    <label>Time <input type="time" id="time" value={time} onChange= {e => setTime(e.target.value)} /></label>
                    <label>Type of Care<input type="text" id="caretype" value={caretype} onChange={e => setCaretype(e.target.value)} /></label>
                    <br />
                    <button onClick={addService}>Add</button>
                </fieldset>
                </form>
                <br />
                <ServiceList services = {services} deleteService={deleteService} editService={editService}/>
                <br />
            </div>
        </>
    );
}

export default ServicesPage;