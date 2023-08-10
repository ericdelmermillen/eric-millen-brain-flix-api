const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const routes = require("./routes/videos").router; 


const app = express();
 
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cors(corsOptions));

require('dotenv').config();

// Allow access to assets folder
app.use(express.static('./assets'));


// allows access to built in json parsing method
app.use(express.json());


// path to videos.json file
const videosFilePath = './data/videos.json';





// Routes:

// // get videos request for /
// get videos request for /videos
app.use('/videos', routes);


// // get video details request for /videos:id
// app.use('/videos/:id', routes);








// request handler for post videos; needs:
  // id
  // comments
  // description
  // duration
  // likes
  // timestamp
  // title
  // views
  
// channel
// image, 
// video

// app.post('/videos', (req, res) => {
//   const newVideo = req.body;

//   if (!newVideo.title || !newVideo.description) {
//     return res.status(400).json({ error: 'All videos require a title and a description' });
//   }

//   newVideo.id = uuidv4();
//   newVideo.channel = 'some channel';
//   newVideo.duration = getRandomDuration();
//   newVideo.likes = getRandomLikesCount();
//   newVideo.views = getRandomViewsCount();
//   newVideo.comments = [];
//   newVideo.timestamp = new Date().getTime();

//   // Read existing videos data
//   fs.readFile(videosFilePath, (err, data) => {
//     if (err) {
//       console.error('Error reading videos.json:', err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

//     try {
//       const videos = JSON.parse(data);
//       videos.unshift(newVideo);

//       // Write updated videos data back to the file
//       fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2), err => {
//         if (err) {
//           console.error('Error writing videos.json:', err);
//           return res.status(500).json({ error: 'Internal server error' });
//         }

//         res.json({ message: 'Video added successfully', video: newVideo });
//       });
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError);
//       res.status(500).json({ error: 'Error parsing JSON' });
//     }
//   });
// });


// access env variables at process.env.VARIABLE_NAME
const port = process.env.PORT || 8088;

app.listen(port, () => console.log(`Listening on ${port}`));