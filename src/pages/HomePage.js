import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {


    const [exhibits, setExhibits] = useState([]);

    const getExhibits = async () => {
        const response = await fetch('localhost-serve:22130/exhibits')
        const exhibits = await response.json();
        setExhibits(exhibits)
    }

    useEffect(() => {
        getExhibits();
    }, [])

    return (

        <>
            <h1>West Coast Best Coast Zoo</h1>
            <Link to="/animals">List of Animals</Link>
            <Link to="/employees">List of Employees</Link>
            <Link to="/exhibits">List of Exhibits</Link>
            <Link to="/services">Daily Services</Link>
            <Link to="/animal-employee-services">Animal Employee Services</Link>
        </>
    );
}

export default HomePage;