function InsertExhibit() {
    return (
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
    )
}

export default InsertExhibit;