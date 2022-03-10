import React from 'react';

function Exhibit({ exhibit, deleteExhibit }) {
    return (
        <tr>
            <td>{exhibit.exhibit_id}</td>
            <td>{exhibit.type}</td>
            <td>{exhibit.size}</td>
            <td>{exhibit.animal_capacity}</td>
            <td><button type="button">Edit</button><button type="button" onClick={ () => deleteExhibit(exhibit.exhibit_id)}>Delete</button></td>
        </tr>
    );
}

export default Exhibit;