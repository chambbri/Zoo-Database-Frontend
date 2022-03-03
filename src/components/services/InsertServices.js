function InsertServices() {
    return (
        <form>
            <fieldset>
                <legend>Add A Service</legend>
                <label>Animal <input type="text" id="animal" name="animal" /></label>
                <label>Date <input type="date" id="date" name="date" /></label>
                <br />
                <label>Time <input type="time" id="time" name="time" /></label>
                <label>Type of Care<input type="text" id="care" name="care" /></label>
                <br />
                <button type="button">Add</button>
            </fieldset>
        </form>
    )
}

export default InsertServices;