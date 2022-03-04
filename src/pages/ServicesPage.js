import { React, useState, useEffect } from 'react';
import InsertServices from '../components/services/InsertServices';
import ServiceList from '../components/services/ServicesList';

function ServicesPage() {

    const [services, setServices] = useState([]);
    const [createServices, setCreateServices] = useState([]);

    const getServices = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/animalservices');
        const services = await res.json()
        setServices(services)
    };

    useEffect(() => {
        getServices();
    }, []);
    return (
        <>
            <div className='app-container'>
                <h1>List of Services</h1>
                <InsertServices />
                <br />
                <ServiceList services = {services}/>
                <br />
            </div>
        </>
    );
}

export default ServicesPage;