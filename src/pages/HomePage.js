import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <>
            <h1>West Coast Best Coast Zoo</h1>
            <Link to="/animals">List of Animals</Link>
            <Link to="/employees">List of Employees</Link>
            <Link to="/exhibits">List of Exhibits</Link>
            <Link to="/services">Daily Services</Link>
            <Link to="/animalemployeeservices">Animal Employee Services</Link>
        </>
    );
}

export default HomePage;