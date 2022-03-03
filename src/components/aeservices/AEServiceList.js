import React from 'react';
import AEService from './AEService';

function AEServiceList({ aeservices }) {
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
                {(aeservices ?? []).map((aeservice, i) => <AEService aeservice={aeservice} key={i} />)}
            </tbody>
        </table>
    )
}

export default AEServiceList