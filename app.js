'use strict';
const serverless = require('serverless-http');
const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = {
    message: "Hello serverless with Koa!"
  };
});

module.exports.handler = serverless(app);