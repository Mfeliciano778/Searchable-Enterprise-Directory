import React from "react";
import "../styles/filterform.css"

function FilterForm(props) {
    var { name, location, role } = document.forms[0];
    const handleFormSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        if
    }
    return (
        <form className="filter-form" onSubmit={handleFormSubmit}>
            <div>
                <h2>Filter By:</h2>
            </div>
            <div>
                <label>Name</label>
                <li><input type="text" name="name"/></li>
            </div>
            <div>
                <li><h3>OR</h3></li>
            </div>
            <div>
                <label>Location</label>
                <li><input type="text" name="location"/></li>
            </div>
            <div>
                <li><h3>OR</h3></li>
            </div>
            <div>
                <label>Role</label>
                <li><input type="text" name="role"/></li>
            </div>
            <div>
                <li><input type="submit" value={"Filter"} /></li>
            </div>
        </form>
    )
}

export default FilterForm