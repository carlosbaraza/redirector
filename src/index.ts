import express from 'express';

const DEFAULT_URL = 'https://www.carlosbaraza.com';
const app = express();

app.get('*', (req, res) => {
  console.log(`Redirecting "${req.hostname}" to "${DEFAULT_URL}"`);
  res.redirect(DEFAULT_URL);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to http://localhost:${port}`));
