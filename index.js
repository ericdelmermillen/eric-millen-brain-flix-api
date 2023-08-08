const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
const port = process.env.PORT || process.argv[2] || 8088;


app.get('/', (req, res) => {
  res.send("listening");
});

app.get('/videos', (req, res) => {
  res.send("listening on /videos");
});



const { v4: uuidv4 } = require('uuid');



app.use(express.json());

app.listen(port, () => console.log(`Listening on ${port}`));