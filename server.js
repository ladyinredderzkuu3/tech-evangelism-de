const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Tech Evangelism DE! Your go-to application for the latest in tech insights.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});