import React from 'react';

function Exhibit({ exhibit }) {
    return (
        <tr>
            <td>{exhibit.exhibit_id}</td>
            <td>{exhibit.type}</td>
            <td>{exhibit.size}</td>
            <td>{exhibit.animal_capacity}</td>
            <td>delete</td>
        </tr>
    );
}

export default Exhibit;