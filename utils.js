function getRandomLikesCount() {
  return Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
};

function getRandomViewsCount() {
  return Math.floor(Math.random() * (200000 - 50000 + 1)) + 50000;
};

function getRandomDuration() {
  const randomMinutes = Math.floor((Math.random() * 8) + 2); // Random minutes from 0 to 59
  const randomSeconds = Math.floor(Math.random() * 60); // Random seconds from 0 to 59

  const formattedMinutes = String(randomMinutes).padStart(2, '0');
  const formattedSeconds = String(randomSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}



// module.exports = {
//   getRandomLikesCount,
//   getRandomViewsCount,
//   getRandomDuration
// }