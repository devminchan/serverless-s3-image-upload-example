"use strict";
const Router = require("@koa/router");
const AWS = require("aws-sdk");
const multer = require("@koa/multer");
const multerS3 = require("multer-s3");

const router = new Router();
const s3 = new AWS.S3();

router.get("/", ctx => {
  ctx.body = {
    message: "Hello from serverless!"
  };
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "s3-image-upload-resources",
    key: function(req, file, cb) {
      cb(null, Date.now().toString() + "_" + file.originalname);
    }
  })
});

router.post("/", upload.single("file"), ctx => {
  ctx.body = {
    message: "Upload success!"
  };
});

module.exports = router;