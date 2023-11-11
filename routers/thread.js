import express from "express";
import jwt from "jsonwebtoken";
import KriThre from "../models/threads.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());



router.get("/upload", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    res.render("threadup", {
      user: { name: decoded.name, code: decoded.code },
    });
  } catch (err) {
    res.redirect("/login");
  }
});

router.get("/:id/edit", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    KriThre.findAll({ where: { id: req.params.id } }).then((resu) => {
      if (resu && resu.length > 0) {
        var data = resu[0].dataValues;
        console.log(req.params.id);
        res.render("threadedit", {
          title: data.title,
          waktu: data.createdAt,
          kategori: data.kategori,
          code: data.code,
          name: data.name,
          id: req.params.id,
          user: {
            name: decoded.name,
            code: decoded.code,
            admin: decoded.admin,
          },
          thread: data.thread,
        });
      }
    });
  } catch (err) {
    res.redirect("/login");
  }
});

router.get("/:id", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    KriThre.findAll({ where: { id: req.params.id } }).then((resu) => {
      if (resu && resu.length > 0) {
        var data = resu[0].dataValues;
        res.render("thread", {
          id: req.params.id,
          title: data.title,
          waktu: data.createdAt,
          kategori: data.kategori,
          code: data.code,
          name: data.name,
          user: {
            name: decoded.name,
            code: decoded.code,
            admin: decoded.admin,
          },
          thread: data.thread,
        });
      }
    });
  } catch (err) {
    res.redirect("/login");
  }
});

export default router;