"use strict";

const express = require("express");
const quotesRoutes = require("./quotesRoutes")

const nunjucks = require("nunjucks");
const app = express();
const cors = require('cors');
const { NotFoundError } = require("./expressError");

app.use(express.json());
app.use(cors());
app.use('/quotes', quotesRoutes);

nunjucks.configure('templates', {
  autoescape: true,
  express: app
});

/** Get homepage */
app.get("/", function (req, res, next) {
  res.render("home.html")
})

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});


module.exports = app;