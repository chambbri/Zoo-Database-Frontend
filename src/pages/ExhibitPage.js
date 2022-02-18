import React from 'react';
import { Link } from 'react-router-dom';
import exhibits from '../data/exhibits';

function ExhibitPage() {
    return (
        <>
        <div className='app-container'>
            <h1>List of Exhibits</h1>
            <form>
                <fieldset>
                    <legend>Add an exhibit</legend>
                    <label>Type of Exhibit <input type="text" id="type" name="type" /></label>
                    <label>Size<input type="int" id="size" name="size" /></label>
                    <br />
                    <label>Animal Capacity <input type="int" id="phone" name="phone" /></label>
                    <br />
                    <button type="button">Add</button>
                </fieldset>
            </form>
            <br />
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
                    <tr>
                        <td>1</td>
                        <td>Lion</td>
                        <td>1000</td>
                        <td>3</td>
                        <td><button type="button">Edit</button><button type="button">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div>
                <label>Search for an exhibit<input type="text" /></label><button>Search</button>
            </div>
        </div>
        </>
    );
}

export default ExhibitPage;