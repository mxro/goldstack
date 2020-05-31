import express from 'express';
import { message } from '@mxro/lib-hello';
import helmet from 'helmet';

// Create a new express app instance
const app: express.Application = express();

app.use(helmet);

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
