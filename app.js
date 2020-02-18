"use strict";
const serverless = require("serverless-http");
const Koa = require("koa");
const router = require("./router");
const app = new Koa();

const AWS = require('aws-sdk');
AWS.config.loadFromPath("./config.json");

app.use(router.routes());
app.use(router.allowedMethods());

module.exports.handler = serverless(app);