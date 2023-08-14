const express = require('express');
const cors = require('cors');
const app = express();
const videosRouter = require('./routes/videos');

app.use(express.json());

app.use(express.static('./public'));

app.use(cors({origin: 'http://localhost:3001'}));


app.use('/videos', videosRouter);

app.listen(8080, () => console.log(`🚀 Listening on 8080`));