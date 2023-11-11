import express from "express";
import mysql2 from "mysql2";
import bodypas from "body-parser";
import md5 from "md5";
import cors from "cors";
import Sequelize from "sequelize";
import * as url from "url";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import * as socketio from "socket.io";
import u from "./utils/users.js";
import http from "http";
import { render } from "ejs";

import creater from "./routers/create.js";
import loginr from "./routers/login.js";
import signupr from "./routers/signup.js";
import homer from "./routers/home.js";
import threadr from "./routers/thread.js";
import api_threadr from "./routers/api_thread.js";
import r404 from "./routers/404.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server);

app.use(cors());
app.use(cookieParser());
app.use(bodypas.urlencoded());
app.use(bodypas.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/pub"));

const hostname = "127.0.0.1";
const port = 3000;

// <-- Pembuatan database jika tidak ada
const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
conn.query(`CREATE DATABASE IF NOT EXISTS kri_kri`, function (err, results) {
  console.log(results);
  console.log(err);
});
conn.end();
// Pembuatan database jika tidak ada -->
app.use("/create", creater);
app.use("/login", loginr);
app.use("/signup", signupr);
app.use("/", homer);
app.use("/thread", threadr);
app.use("/api/thread", api_threadr);
app.use("/*", r404);
// <-- socket
io.on("connection", (socket) => {
  socket.on("joinRoom", (a) => {
    const user = u.userJoin(socket.id, "maha", "berita");
    socket.join(user.room);
    // Welcome current user
    // Send users and room info
  });
  socket.on("pengu1", (msg) => {
    const user = u.getCurrentUser(socket.id);
    console.log(user);
    io.to(user.room).emit("pengu", msg);
  });
  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = u.userLeave(socket.id);
  });
});
// socket -->

app.listen(port, () => {
  console.log("serper ruunin " + hostname + ":" + port);
});
