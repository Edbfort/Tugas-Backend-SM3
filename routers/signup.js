import express from "express";
import cookieParser from "cookie-parser";
import KriUser from "../models/user.js";
import md5 from "md5";

const router = express.Router();
router.use(cookieParser());

router.get("/", (req, res) => {
  res.cookie("tokritu", "", { httpOnly: true });
  res.render("signup", { al: "" });
});

router.post("/", (req, res) => {
  res.cookie("tokritu", "", { httpOnly: true });
  KriUser.findAll({ where: { name: req.body._username } }).then((resu) => {
    if (resu && resu.length > 0) {
      res.render("signup", { al: "Username Sudah Ada" });
    } else {
      KriUser.create({
        name: req.body._username,
        password: md5(req.body._password),
        admin: 0,
        active: 1,
      });
      res.redirect("/login");
    }
  });
});

export default router;