import React from "react";

 function EmployeeCard({ name, phone, role, location, salary}) {
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
            <p className="font-bold text-md">{name}</p>
            <p className="font-bold text-md">{phone}</p>
            <p>{role}</p>
            <p className="text-blue-500">{location}</p>
            <p>{salary}</p>
        </div>
    )
}

export default EmployeeCard;