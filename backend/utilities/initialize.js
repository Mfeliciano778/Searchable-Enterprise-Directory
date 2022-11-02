import mongoose from "mongoose";
import Employee from "../models/employee.js";

function dropCollection() {
  Employee.collection.drop().then(
    () => console.log("dropped Employee collection"),
    () => console.log("no Employee collection")
  );
}

function populateCollection() {
  Employee.counterReset("EMPLOYEE_ID", () => {
    Employee.create({
      EMPLOYEE_NAME: "Palpatine",
      PHONE: "860-555-0001",
      ROLE: "Sith Lord",
      LOCATION: "Death Star",
      SALARY: 9999999,
      MANAGER_ID: 0,
      PASSWORD: "sheev",
    })
      .then(() =>
        Employee.create({
          EMPLOYEE_NAME: "Darth Vader",
          PHONE: "860-555-0000",
          ROLE: "Sith Lord",
          LOCATION: "Mustafar",
          SALARY: 999999,
          MANAGER_ID: 1,
          PASSWORD: "darkside",
        })
      )
      .then(() =>
        Employee.create({
          EMPLOYEE_NAME: "Yoda",
          PHONE: "860-555-1111",
          ROLE: "Jedi",
          LOCATION: "Dagobah",
          SALARY: 750000,
          MANAGER_ID: 0,
          PASSWORD: "theforce",
        })
      )
      .then(() =>
        Employee.create({
          EMPLOYEE_NAME: "Luke Skywalker",
          PHONE: "860-555-2222",
          ROLE: "Jedi",
          LOCATION: "Tattoine",
          SALARY: 500000,
          MANAGER_ID: 3,
          PASSWORD: "swamprat",
        })
      )
      .then(() =>
        Employee.create({
          EMPLOYEE_NAME: "Toby",
          PHONE: "860-555-3333",
          ROLE: "HR",
          LOCATION: "Death Star",
          SALARY: 7500,
          MANAGER_ID: 2,
          PASSWORD: "office",
        })
      );
  });
}

export default function init_db() {
  mongoose.connect("mongodb://127.0.0.1:27017/hackathon");

  dropCollection();
  populateCollection();
}
