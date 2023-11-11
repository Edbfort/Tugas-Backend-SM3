import express from "express";
import cookieParser from "cookie-parser";
import KriUser from "../models/user.js";
import jwt from "jsonwebtoken";
import md5 from "md5";

const router = express.Router();
router.use(cookieParser());

router.get("/", (req, res) => {
  res.cookie("tokritu", "", { httpOnly: true });
  res.render("login");
});

router.get("/out", (req, res) => {
  res.redirect("/login");
});

router.post("/check", (req, res) => {
  try {
    KriUser.findAll({ where: { name: req.body._username } }).then((resu) => {
      if (resu && resu.length > 0) {
        var data = resu[0].dataValues;
        if (data.password == md5(req.body._password)) {
          const pay = {
            name: data.name,
            code: data.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            admin: data.admin,
          };
          const token = jwt.sign(pay, "frozen-fruu");
          res.cookie("tokritu", token, { httpOnly: true });
          res.redirect("/home");
        } else {
          res.redirect("/login");
        }
      } else {
        res.redirect("/login");
      }
    });
  } catch (err) {
    res.redirect("/login");
  }
});

export default router;