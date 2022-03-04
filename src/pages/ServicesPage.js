import React from 'react';
import { Link } from 'react-router-dom';
import InsertServices from '../components/services/InsertServices';
import ServiceList from '../components/services/ServicesList';

function ServicesPage() {
    return (
        <>
            <div className='app-container'>
                <h1>List of Services</h1>
                <InsertServices />
                <br />
                <ServiceList />
                <br />
            </div>
        </>
    );
}

export default ServicesPage;