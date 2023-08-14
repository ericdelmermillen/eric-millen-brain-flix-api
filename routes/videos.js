const fs = require('fs');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const videosFilePath = './data/videos.json';

// Helper function to get video data
const getVideos = () => JSON.parse(fs.readFileSync(videosFilePath));

const { getRandomDuration, getRandomLikesCount, getRandomViewsCount} = require("../utils"); 


// get videos request
router
  .route('/')
  .get((req, res) => {
    const videosData = getVideos();  
    
    const videosEssentailData = videosData.map(video => {
      const { comments, description, duration, likes, timestamp, video: videoFile, views, ...essentials } = video;
      return essentials;
      })
      res.status(200).json(videosEssentailData);
  })
.post((req, res) => {
  const newVideo = req.body;

  newVideo.id = uuidv4();
  newVideo.channel = 'some channel';
  newVideo.duration = getRandomDuration();
  newVideo.likes = getRandomLikesCount();
  newVideo.views = getRandomViewsCount();
  newVideo.comments = [];
  newVideo.timestamp = new Date().getTime();
  newVideo.image = "images/l2Xfgpl.jpg"

  // Read existing videos data
  fs.readFile(videosFilePath, (err, data) => {

  const videos = JSON.parse(data);
  videos.unshift(newVideo);

  // Write updated videos data back to the file
  fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2), err => {
    if (err) {
      console.error('Error writing videos.json:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }});
  });
    res.json({ message: 'Video added successfully', video: newVideo });
});


router.route('/:id')
// get video details
  .get((req, res) => {
    
  const id = req.params.id; 
  
  fs.readFile(videosFilePath, (err, data) => {
    const requestedVideo = JSON.parse(data).find(video => video.id === id);
      
    if (!requestedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(requestedVideo);
  })
})

router.post('/:id/comments', (req, res) => {
  // post comments on a video
  fs.readFile(videosFilePath, (err, data) => {
    
    const videos = JSON.parse(data);
    const requestedVideo = videos.find(video => video.id === req.body.id);
    
    if (!requestedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }
    
    if (!requestedVideo.comments) {
      requestedVideo.comments = [];
    }
    const newComment = req.body;
    newComment.id = uuidv4();
    newComment.name = "Yo mama...";
    newComment.likes = getRandomLikesCount();
    newComment.timestamp = new Date().getTime();
    requestedVideo.comments.unshift(newComment);

    // Write the updated data back to the JSON file
    fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2), err => {
      if (err) {
        console.error('Error writing videos.json:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: 'Comment added successfully', video: requestedVideo });
    });
  });
});

module.exports = router;
