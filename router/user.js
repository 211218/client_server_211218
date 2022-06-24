import { Router } from "express";
import { getUser } from "../model/users.js";
import { getFather } from "../model/father.js";

const router = Router();

router.get("/all_users", async function (req, res) {
  getUser
    .findAll({
      include: {
        model: getFather,
        attributes: ["name", "lastNamef", "lastNamem", "age"],
      },
      attributes: ["name", "lastName", "email", "password", "phone_number"],
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create_users", async function (req, res) {
  getUser
    .create({
      name: req.query.name,
      lastName: req.query.lastName,
      email: req.query.email,
      password: req.query.password,
      phone_number: req.query.phone_number,
    })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_users", async function (req, res) {
  let newDato = req.query;
  getUser
    .findOne({
      where: {
        id:  req.query.id
      },
    })
    .then((users) => {
      users.update(newDato).then((newuser) => {
        res.send(newuser);
      });
    });
});

router.delete("/delete_users", async function (req, res) {
  getUser
    .destroy({
      where: {
        id: req.query.id
      },
    })
    .then(() => {
      res.send("person delete");
    });
});

export default router;
