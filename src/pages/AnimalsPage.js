import React from 'react';
import { Link } from 'react-router-dom';

function animals(){
    return(
        <body>
            <h1>West Coast Best Coast Zoo Animals</h1>
            <div>
                <form>
                    <fieldset>
                        <legend>Add an animal</legend>
                        <label>Animal Type<input type="text" id="animaltype" name="animaltype"/></label>
                        <label>Exhibit <input type="text" id="exhibit" name="exhibit"/></label>
                        <label>Origin Country<input type="origincountry" id="origincountry" name="origincountry"/></label>
                        <label>Birthdate<input type="date" id="birthdate" name="birthdate" /></label>
                        <label>Gender</label>
                        <select name="gender" id="gender">
                            <option value="female">Male</option>
                            <option value="male">Female</option>
                        </select>
                        <button type="button">Add</button>
                    </fieldset>
                </form>
            </div>
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Animal ID</th>
                            <th>Animal Type</th>
                            <th>Exhibit</th>
                            <th>Origin Country</th>
                            <th>Birthdate</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lion</td>
                            <td>Lion Exhibit</td>
                            <td>South Africa</td>
                            <td>05/12/2012</td>
                            <td>Male</td>
                            <td><button type="button">Edit</button><button type="button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div>
                <label>Search for an animal<input type="text"/></label>
            </div>
            <br />
            <Link to="/">Go back to the Home Page</Link>
        </body>
    )
}

export default animals;