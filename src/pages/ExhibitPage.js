import React from 'react';
import { Link } from 'react-router-dom';
import InsertExhibit from '../components/exhibits/InsertExhibit';
import ExhibitList from '../components/exhibits/ExhibitList';


function ExhibitPage() {


    return (
        <>
        <div className='app-container'>
            <h1>List of Exhibits</h1>
            <InsertExhibit />
            <br />
            <ExhibitList />
            <br />
        </div>
        </>
    );
}

export default ExhibitPage;