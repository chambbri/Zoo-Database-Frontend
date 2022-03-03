function InsertAnimal() {
    return (
        <form>
            <fieldset>
                <legend>Add an animal</legend>
                <label>Animal Type<input type="text" id="animaltype" name="animaltype" /></label>
                <label>Exhibit</label>
                <select name="exhibit" id="exhibit">
                    <option value="female">1</option>
                    <option value="male">2</option>
                </select>
                <label>Origin Country<input type="origincountry" id="origincountry" name="origincountry" /></label>
                <label>Birthdate<input type="date" id="birthdate" name="birthdate" /></label>
                <label>Gender</label>
                <select name="gender" id="gender">
                    <option value="female">Male</option>
                    <option value="male">Female</option>
                </select>
                <button type="button">Add</button>
            </fieldset>
        </form>
    )
}

export default InsertAnimal;