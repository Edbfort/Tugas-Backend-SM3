import express from "express";
import jwt from "jsonwebtoken";
import KriThre from "../models/threads.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

router.get("/", (req, res) => {
  res.redirect("/home");
});

router.get("/home", (req, res) => {
  try {
    var decoded = jwt.verify(req.cookies.tokritu, "frozen-fruu");
    var ur = req.originalUrl.slice(
      req.originalUrl.indexOf("?"),
      req.originalUrl.length
    );
    var urlParams = new URLSearchParams(ur);
    var page_ = urlParams.get("page");
    var fil_ = urlParams.get("filter-value");
    if (!page_) {
      page_ = 1;
    }
    const data = [];
    KriThre.findAll().then((resu) => {
      resu.forEach((apa) => {
        var dat = apa.dataValues;
        if (fil_) {
          if (dat.title.toLowerCase().indexOf(fil_.toLowerCase()) != -1) {
            dat.links_ = "/thread/" + dat.id;
            data.push(dat);
          }
        } else {
          dat.links_ = "/thread/" + dat.id;
          data.push(dat);
        }
      });
      data.sort();
      data.reverse();
      var list_thread = [];
      const chunkSize = 10;
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        list_thread.push(chunk);
      }
      var urrleft = req.originalUrl.indexOf("?");
      if (urrleft == -1) {
        urrleft = req.originalUrl.indexOf("/home") + 5;
      }
      var urr = req.originalUrl.slice(
        req.originalUrl.indexOf("/home"),
        urrleft
      );
      urr += "?";
      if (fil_) {
        let result = fil_.replace(/ /g, "+");
        urr += "filter-value=" + result + "&";
      }
      res.render("home", {
        threads: list_thread[page_ - 1],
        page: { current: parseInt(page_), total: list_thread.length },
        user: { name: decoded.name, code: decoded.code, admin: decoded.admin },
        nextp: urr,
      });
    });
  } catch (err) {
    res.redirect("/login");
  }
});

export default router;