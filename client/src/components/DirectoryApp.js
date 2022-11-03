import React from "react";
import EmployeeCardList from './EmployeeList';
import FilterForm from './Filter';

function DirectoryApp() {
    const listOfEmployees = [
        {"employee_id": 1, "name":"Darth Vader", "phone":"860-555-0000", "role":"Sith Lord", "location":"Mustafar", "salary":999999},
        {"employee_id": 2, "name":"Yoda", "phone":"860-555-1111", "role":"Jedi", "location":"Dagobah", "salary":750000},
        {"employee_id": 3, "name":"Luke Skywalker", "phone":"860-555-2222", "role":"Jedi", "location":"Tattoine", "salary":500000},
        {"employee_id": 4, "name":"Toby", "phone":"860-555-3333", "role":"HR", "location":"Death Star", "salary":75000}
    ]
    return (
        <div className='App'>
            <div className='employer-list'>
                <div><h1>Employee Directory</h1></div>
                <div className='container'>
                    <FilterForm listOfEmployees={listOfEmployees}/>
                </div>
                <EmployeeCardList data={listOfEmployees}/>
            </div>
        </div>
    )
}
export default DirectoryApp