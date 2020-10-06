const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = 3000;

mongoose.connect(
  "mongodb://localhost:27017/clients-api-web",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
