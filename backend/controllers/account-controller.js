import Employee from "../models/employee.js";
import dataCleaner from "../utilities/data-cleaner.js";

const accountController = {
  login: function (req, res) {
    Employee.findOne(
      { EMPLOYEE_NAME: req.body.username, PASSWORD: req.body.password },
      "",
      function (err, employee) {
        if (err || !employee) {
          res.sendStatus(401); // Unauthorized
        } else {
          res.status(200).send(dataCleaner.createUserToken(employee)); // OK
        }
      }
    );
  },

  register: function (req, res) {
    Employee.create({
      EMPLOYEE_NAME: req.body.name,
      PHONE: req.body.phone,
      ROLE: req.body.role,
      LOCATION: req.body.location,
      SALARY: req.body.salary,
      MANAGER_ID: req.body.manager_id,
      PASSWORD: req.body.password,
    }).then(
      () => res.sendStatus(201), // OK
      () => res.sendStatus(500) // OK
    );
  },
};

export default accountController;
