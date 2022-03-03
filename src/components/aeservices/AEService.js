import React from 'react';

function AEService({ aeservice }) {
    return (
        <tr>
            <td>{aeservice.service}</td>
            <td>{aeservice.employee}</td>
            <td><button type="button">Edit</button><button type="button">Delete</button></td>
        </tr>
    );
}

export default AEService;