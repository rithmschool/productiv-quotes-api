"use strict";

/** Routes file for quotes routes */

const express = require("express");
const db = require("./quotesFakeDb");

const router = new express.Router();

/** GET /quotes/ return all quotes */
router.get("/", function (req, res, next) {
  return res.json({ quotes: db.quotes });
});

/** GET /quotes/random return a quote at random */
router.get("/random", function (req, res, next) {
  const randomQuote = db.quotes[Math.floor(Math.random() * db.quotes.length)];
  return res.json({ quote: randomQuote });
});

module.exports = router;
