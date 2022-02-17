import React from 'react';
import { Link } from 'react-router-dom';
import exhibits from '../data/exhibits';

function ServicesPage() {
    return (
        <>
            <div className='app-container'>
                <h1>List of Services</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Animal Service ID</th>
                            <th>Animal ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Type of Care</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>2/08/2022</td>
                            <td>10:00AM</td>
                            <td>Feeding</td>
                            <td><button type="button">Edit</button><button type="button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <form>
                    <fieldset>
                        <legend>Add A Service</legend>
                        <label>Animal <input type="text" id="animal" name="animal" /></label>
                        <label>Date <input type="date" id="date" name="date" /></label>
                        <br />
                        <label>Time <input type="time" id="time" name="time" /></label>
                        <label>Type of Care<input type="text" id="care" name="care"/></label>
                        <br />
                        <button type="button">Add</button>
                    </fieldset>
                </form>
                <br />
                <Link to="/">Go back to Home</Link>
            </div>
        </>
    );
}

export default ServicesPage;