import express from "express";
import KriThre from "../models/threads.js";
import KriUser from "../models/user.js";
import md5 from "md5";

const router = express.Router();

router.get("/db", (req, res) => {
  KriUser.sync();
  KriThre.sync();
  // KriCom.sync();
  res.end("db created");
});

router.get("/da", (req, res) => {
  KriUser.create({
    name: "Birb",
    password: md5("free"),
    admin: 0,
    active: 1,
  });
  KriUser.create({
    name: "houlieniao",
    password: md5("nishiwowoshini"),
    admin: 1,
    active: 1,
  });
  res.end("dummy acc created");
});

router.get("/thre", (req, res) => {
  const ar = [
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread: "Never Gonna Gonna Say Good Bye",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "Let's share our favorite healthy breakfast recipes for a productive day!",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "NSFW",
      thread:
        "What's your favorite way to stay active during the winter months?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "Which books are you currently reading? Share your thoughts and opinions!",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "How do you stay organized and manage your daily tasks? Tips and tricks welcome!",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "NSFW",
      thread:
        "What's your favorite hobby and how do you make time for it in your busy schedule?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "What are some of the best apps you use to boost productivity and stay on top of things?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "What's your go-to stress relief technique? Share your self-care routine!",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "NSFW",
      thread:
        "What are some of your favorite healthy and easy meals to cook at home?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "What are some of the best online courses and resources for personal growth and development?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "SFW",
      thread:
        "What are some of your favorite healthy and eco-friendly products that you use daily?",
    },
    {
      name: "Birb",
      code: 1,
      title: "Desu",
      kategori: "NSFW",
      thread:
        "What are some of the best travel destinations you've been to and why did you love them?",
    },
  ];
  for (let i = 0; i < ar.length; i++) {
    KriThre.create(ar[i]);
  }
  res.end("dummy thread created");
});

export default router;