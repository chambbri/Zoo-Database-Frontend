import React from 'react';

function animals(){
    return(
        <body>
            <h1>West Coast Best Coast Zoo Employees</h1>
            <div>
                <form>
                    <fieldset>
                        <legend>Add an employee</legend>
                        <label>First Name <input type="text" id="fname" name="fname"/></label>
                        <label>Last Name <input type="text" id="lname" name="lname"/></label>
                        <label for="phone">Phone Number <input type="tel" id="phone" name="phone"/></label>
                        <label>Email<input type="email" id="email" name="email"/></label>
                        <label>Job Title</label>
                        <select name="job" id="job">
                            <option value="zookeeper">Zookeeper</option>
                            <option value="vet">Veterinarian</option>
                        </select>
                        <button type="button">Add</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Zoo</td>
                            <td>Keep</td>
                            <td>123-456-7890</td>
                            <td>zookeep@wcbczoo.com</td>
                            <td>Zookeeper</td>
                            <td><button type="button">Edit</button><button type="button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <label>Search for an employee<input type="text"/></label>
            </div>
        </body>
    )
}

export default animals;