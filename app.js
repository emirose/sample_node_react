const express = require('express');
const app = express();

const apiRouter = require('./api').apiRouter;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
