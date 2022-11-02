import Employee from "../models/employee.js";
import dataCleaner from "../utilities/data-cleaner.js";

const employeeController = {
  // GET /api/employees/
  getAllEmployees: function (req, res) {
    Employee.find({}, "", function (err, employees) {
      if (err || !employees || employees.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanEmployees(employees));
      }
    });
  },

  // GET /api/employees/byname/:employee_name
  getEmployeeByName: function (req, res) {
    Employee.findOne(
      { EMPLOYEE_NAME: req.params.employee_name },
      "",
      function (err, employee) {
        if (err || !employee) {
          res.sendStatus(404);
        } else {
          res.status(200).send(dataCleaner.cleanEmployee(employee));
        }
      }
    );
  },

  // GET /api/employees/bylocation/:location
  getEmployeesByRole: function (req, res) {
    Employee.find({ ROLE: req.params.role }, "", function (err, employees) {
      if (err || !employees || employees.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanEmployees(employees));
      }
    });
  },

  // GET /api/employees/bylocation/:location
  getEmployeesByLocation: function (req, res) {
    Employee.find(
      { LOCATION: req.params.location },
      "",
      function (err, employees) {
        if (err || !employees || employees.length == 0) {
          res.sendStatus(404);
        } else {
          res.status(200).send(dataCleaner.cleanEmployees(employees));
        }
      }
    );
  },
};

export default employeeController;
