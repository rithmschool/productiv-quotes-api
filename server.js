"use strict";

/** Simple Express app. */

const app = require("./app");
const { PORT } = require("./config");


app.listen(PORT, function () {
    console.log(`Started http://localhost:${PORT}/`);
  });
  