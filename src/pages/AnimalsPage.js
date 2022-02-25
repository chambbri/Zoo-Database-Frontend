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
                        <label>Exhibit</label>
                        <select name="exhibit" id="exhibit">
                            <option value="female">1</option>
                            <option value="male">2</option>
                        </select>
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
                            <th>Exhibit ID</th>
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
                            <td>1</td>
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
                <label>Search for an animal by animal type<input type="text" /></label><button>Search</button>
            </div>
        </body>
    )
}

export default animals;