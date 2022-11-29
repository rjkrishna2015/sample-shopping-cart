const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 2190;

require("./db/conn");
app.use(require("./router/router"));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
