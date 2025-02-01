const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body is empty' });
  }
  const user = req.body;
  console.log('User:', user);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));