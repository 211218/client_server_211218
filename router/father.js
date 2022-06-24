import { Router } from "express";
import { getFather } from "../model/father.js";
import { getUser } from "../model/users.js";
import { getSon } from "../model/son.js";

const router = Router();

router.get("/all_fathers", async function (req, res) {
  getFather
    .findAll({
      include: {
        model: getSon,
        attributes: ["name", "lastNamef", "lastNamem", "age"],
      },
      attributes: ["id", "name", "lastNamef", "lastNamem", "age"],
    })
    .then((father) => {
      res.send(father);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create_fathers", async function (req, res) {
  getFather
    .create({
      name: req.query.name,
      lastNameFather: req.query.lastNamef,
      lastNameMother: req.query.lastNamem,
      age: req.query.age,
      catUserId: req.query.catUserId,
    })
    .then((father) => {
      res.send(father);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update_fathers", async function (req, res) {
  let id = req.query.id;

  let newDato = req.query;
  getFather
    .findOne({
      where: { id: id },
    })
    .then((father) => {
      father.update(newDato).then((newfather) => {
        res.send(newfather);
      });
    });
});

router.delete("/delete_fathers", async function (req, res) {
  let id = req.query.id;

  getFather
    .destroy({
      where: { id: id },
    })
    .then(() => {
      res.send("father delete");
    });
});

export default router;
