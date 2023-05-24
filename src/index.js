const express = require('express');
const app = express();

app.get("/", async(req, res) => {
  res.send({ status: 200, message: 'hello world!' });
});

app.listen(80, () => console.log(`live`));