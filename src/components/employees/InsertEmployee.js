function InsertEmployee() {
    return (
        <form>
            <fieldset>
                <legend>Add an employee</legend>
                <label>First Name <input type="text" id="fname" name="fname" /></label>
                <label>Last Name <input type="text" id="lname" name="lname" /></label>
                <label for="phone">Phone Number <input type="tel" id="phone" name="phone" /></label>
                <label>Email<input type="email" id="email" name="email" /></label>
                <label>Job Title</label>
                <select name="job" id="job">
                    <option value="zookeeper">Zookeeper</option>
                    <option value="vet">Veterinarian</option>
                </select>
                <button type="button">Add</button>
            </fieldset>
        </form>
    )
}

export default InsertEmployee;