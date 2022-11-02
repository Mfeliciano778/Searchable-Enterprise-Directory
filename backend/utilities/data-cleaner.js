const dataCleaner = {
  cleanEmployee: (employee) => {
    return {
      name: employee.EMPLOYEE_NAME,
      phone: employee.PHONE,
      role: employee.ROLE,
      location: employee.LOCATION,
      salary: employee.SALARY,
    };
  },

  cleanEmployees: (employees) => {
    var results = [];
    for (const e in employees) {
      results.push(dataCleaner.cleanEmployee(employees[e]));
    }
    return results;
  },

  createUserToken: (employee) => {
    return {
      user_id: employee.EMPLOYEE_ID,
      user_role: employee.ROLE,
    };
  },
};

export default dataCleaner;
