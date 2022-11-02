import express from "express";
var employeeRouter = express.Router();
import employeeController from "../controllers/employee-controller.js";

// GET /api/employees
employeeRouter.get("/", function (req, res) {
  employeeController.getAllEmployees(req, res);
});

// GET /api/employees/byname/:employee_name
employeeRouter.get("/byname/:employee_name", function (req, res) {
  employeeController.getEmployeeByName(req, res);
});

// GET /api/employees/byrole:role
employeeRouter.get("/byrole/:role", function (req, res) {
  employeeController.getEmployeesByRole(req, res);
});

// GET /api/employees/bylocation:location
employeeRouter.get("/bylocation/:location", function (req, res) {
  employeeController.getEmployeesByLocation(req, res);
});

export default employeeRouter;
