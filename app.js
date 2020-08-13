const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const indexRouter = require("./routes/main");
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

module.exports = app;