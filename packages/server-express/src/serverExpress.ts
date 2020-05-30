import express from 'express';
import { message } from '@mxro/lib-hello';

// Create a new express app instance
const app: express.Application = express();
app.get('/', (req, res) => {
  res.send(message);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
