function InsertAEService() {
    return (
        <form>
            <fieldset>
                <legend>Add an entry</legend>
                <label>animal_services_id<input type="text" id="animalservid" name="animalservid" /></label>
                <label>employee_id<input type="text" id="employeeid" name="employeeid" /></label>
                <button type="button">Add</button>
            </fieldset>
        </form>
    )
}

export default InsertAEService;