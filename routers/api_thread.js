import express from "express";
import jwt from "jsonwebtoken";
import KriThre from "../models/threads.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

router.get("/", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    KriThre.findAll().then((resu) => {
      res.json(resu);
    });
  } catch (err) {
    res.redirect("/404");
  }
});
router.post("/upload", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    KriThre.create({
      name: decoded.name,
      code: decoded.code,
      title: req.body.title,
      kategori: req.body.kategori,
      thread: req.body.content,
    });
    res.redirect("/home");
  } catch (err) {
    res.redirect("/404");
  }
});
router.put("/edit", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    if (decoded.code == req.body.code) {
      KriThre.update(
        {
          name: decoded.name,
          code: decoded.code,
          title: req.body.title,
          kategori: req.body.kategori,
          thread: req.body.thread,
        },
        { where: { id: req.body.id } }
      ).then((err, resu) => {
        res.send();
      });
    } else {
      throw "pop";
    }
  } catch (err) {
    res.send();
  }
});
router.delete("/delete/:id/:code", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    if (req.params.code == decoded.code) {
      KriThre.destroy({ where: { id: req.params.id } }).then((err, resu) => {
        res.send();
      });
    } else {
      throw "pop";
    }
  } catch (err) {
    res.send();
  }
});

export default router;