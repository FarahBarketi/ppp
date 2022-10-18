const express = require("express");
const {
  Addarticle,
  Getarticles,
  Deletearticles,
  Updatearticles,
} = require("../controlles/article");
const { isAuth } = require('../Middlewear/isAuth');
const upload = require ("../Middlewear/upload");
const articleRoute = express.Router();

articleRoute.post("/add",upload.single('image'), Addarticle);
articleRoute.get("/get", Getarticles);
articleRoute.delete("/del/:id", Deletearticles);
articleRoute.put("/put/:id", Updatearticles);

module.exports = articleRoute;