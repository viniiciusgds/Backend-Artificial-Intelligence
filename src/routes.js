const express = require("express");
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const ImageController = require("./controllers/imageController");

routes.post(
  "/image",
  multer(multerConfig).single("image"),
  ImageController.create
);

module.exports = routes;
