import EmployeeCard from "./EmployeeCard";

function EmployeeCardList ({ data }) {
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.employee_id}
                phone={employee.phone}
                name={employee.employee_name}
                role={employee.role}
                location={employee.location}
                salary={employee.salary}
            />
            ))
    )
}

export default EmployeeCardList;