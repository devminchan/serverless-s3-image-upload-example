'use strict';
const serverless = require('serverless-http');
const Koa = require('koa');
const router = require('./router');
const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

module.exports.handler = serverless(app);