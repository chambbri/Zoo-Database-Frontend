import React from 'react';

function Exhibit({ exhibit }) {
    return (
        <tr>
            <td>{exhibit.id}</td>
            <td>{exhibit.type}</td>
            <td>{exhibit.size}</td>
            <td>{exhibit.animalcapacity}</td>
            <td>delete</td>
        </tr>
    );
}

export default Exhibit;