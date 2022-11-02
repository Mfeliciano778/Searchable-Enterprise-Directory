import express from "express";
import accountController from "../controllers/account-controller.js";
var accountRouter = express.Router();

// POST /api/acounts/login
accountRouter.post("/login", function (req, res) {
  accountController.login(req, res);
});

// POST /api/acounts/register
accountRouter.post("/register", function (req, res) {
  accountController.register(req, res);
});

export default accountRouter;
