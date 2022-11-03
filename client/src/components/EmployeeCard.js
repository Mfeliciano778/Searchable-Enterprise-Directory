import React from "react";
import "../styles/employeecard.css"

 function EmployeeCard({ name, phone, role, location, salary}) {
    return (
        <div className="Card">
            <p className="regText">{name}</p>
            <p className="regText">{phone}</p>
            <p className="regText">{role}</p>
            <p className="Location">{location}</p>
            <p className="regText">{salary}</p>
        </div>
    )
}

export default EmployeeCard;