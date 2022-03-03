import React from 'react';
import { Link } from 'react-router-dom';
import InsertAEService from '../components/aeservices/InsertAEService';
import AEServiceList from '../components/aeservices/AEServiceList';

function a_e_services() {
    return (
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <div>
                <InsertAEService />
            </div>
            <br />
            <div>
               <AEServiceList />
            </div>
        </body>
    )
}

export default a_e_services;