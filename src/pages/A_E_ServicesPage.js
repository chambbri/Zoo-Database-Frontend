import React from 'react';
import { Link } from 'react-router-dom';

function a_e_services() {
    return (
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <div>
                <form>
                    <fieldset>
                        <legend>Add an entry</legend>
                        <label>animal_services_id<input type="text" id="animalservid" name="animalservid"/></label>
                        <label>employee_id<input type="text" id="employeeid" name="employeeid"/></label>
                        <button type="button">Add</button>
                    </fieldset>
                </form>
            </div>
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>animal_services_id</th>
                            <th>employee_id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td><button type="button">Edit</button><button type="button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div>
                <label>Search for an animal employee service<input type="text" /></label><button>Search</button>
            </div>
        </body>
    )
}

export default a_e_services;