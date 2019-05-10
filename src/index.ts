import express from 'express';

import { getMap } from './map';

const app = express();

app.get('*', (req, res) => {
  const map = getMap(req.hostname);
  console.log(`Redirecting "${req.hostname}" to "${map.to}"`);
  res.redirect(map.to);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to http://localhost:${port}`));
