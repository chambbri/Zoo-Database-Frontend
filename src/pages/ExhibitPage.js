import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsertExhibit from '../components/exhibits/InsertExhibit';
import ExhibitList from '../components/exhibits/ExhibitList';


function ExhibitPage() {

    const [exhibits, setExhibits] = useState([]);
    const [createExhibit, setCreateExhibit] = useState([]);

    const getExhibits = async() => {
        const res = await fetch('http://flip1.engr.oregonstate.edu:22131/exhibits');
        const exhibits = await res.json()
        setExhibits(exhibits)
    };

    useEffect(() => {
        getExhibits();
    }, []);



    return (
        <>
        <div className='app-container'>
            <h1>List of Exhibits</h1>
            <InsertExhibit />
            <br />
            <ExhibitList exhibits={exhibits}/>
            <br />
        </div>
        </>
    );
}

export default ExhibitPage;