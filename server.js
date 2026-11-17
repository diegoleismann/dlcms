const express = require('express');
const app = express();
const port = 3000;
const path = require('node:path');


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {
    users: "",
    title: "EJS example",
    header: "Some users" 
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});