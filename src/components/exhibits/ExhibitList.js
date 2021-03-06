import React from 'react';
import Exhibit from './Exhibit';

function ExhibitList({exhibits, deleteExhibit, editExhibit}) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Exhibit ID</th>
                    <th>Type</th>
                    <th>Size (Sq Feet)</th>
                    <th>Animal Capacity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {exhibits.map((exhibit, i) => <Exhibit exhibit={exhibit} deleteExhibit={deleteExhibit} key={i} editExhibit={editExhibit}></Exhibit>)}
            </tbody>
        </table>
    )
}

export default ExhibitList