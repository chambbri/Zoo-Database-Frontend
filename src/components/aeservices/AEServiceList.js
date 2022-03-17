import React from 'react';
import AEService from './AEService';

function AEServiceList({ aeservices, deleteAEService, editAEService }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Animal Service ID</th>
                    <th>Employee ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {aeservices.map((aeservice, i) => <AEService deleteAEService={deleteAEService} aeservice={aeservice} key={i} editAEService={editAEService}></AEService>)}
            </tbody>
        </table>
    )
}

export default AEServiceList